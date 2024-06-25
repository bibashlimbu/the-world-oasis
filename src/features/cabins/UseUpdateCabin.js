import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUpdateCabin } from "../../services/apiCabin";
import { toast } from "react-toastify";

export function useUpdateCabin() {
  const queryClient = useQueryClient();
  const { mutate: updateCabin, isLoading: isUpadting } = useMutation({
    mutationFn: ({ newCabin, id }) => createUpdateCabin(newCabin, id),
    onSuccess: () => {
      toast.success("Cabin upadted sucessfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => toast.error("Cabin could not be updated"),
  });

  return { isUpadting, updateCabin };
}
