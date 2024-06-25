import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be loaded");
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data;
}

export async function createUpdateCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}- ${newCabin.image.name}`.replace("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1. create cabin
  let query = supabase.from("cabins");
  //A. create and edit the cabin
  if (!id) query = query.insert({ ...newCabin, image: imagePath });

  if (id)
    query = query
      .update({ ...newCabin, image: imagePath })
      .eq("id", id)
      .select();
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  if (hasImagePath) return data;

  //2. upload images
  const { error: StorageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image, {
      cacheControl: "3600",
      upsert: false,
    });

  //delete the cabin if there was error on uploading image
  if (StorageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(error);
    throw new Error("cabin image cannot be uploaded");
  }

  return data;
}
