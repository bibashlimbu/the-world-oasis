import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { createUpdateCabin } from "../../services/apiCabin";

export function useCreateCabin() {
  const queryClient = useQueryClient();
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createUpdateCabin,
    onSuccess: () => {
      toast.success("Cabin created sucessfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => toast.error("Cabin could not be created"),
  });

  return { isCreating, createCabin };
}
