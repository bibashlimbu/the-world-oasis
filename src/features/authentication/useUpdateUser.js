import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("user updated sucessfully");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: () => toast.error("User could not be updated"),
  });

  return { updateUser, isUpdating };
}
