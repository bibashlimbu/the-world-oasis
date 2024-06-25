import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabin";
import { toast } from "react-toastify";

export function useDeleteCabin() {
  const queryClient = useQueryClient();
  const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin deleted sucessfully");
      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },
    onError: () => {
      toast.error("Cabin could not be deleted");
    },
  });

  return { isDeleting, deleteCabin };
}
