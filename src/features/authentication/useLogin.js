import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      navigate("/dashboard");
      queryClient.setQueryData(["user"], user.user);
    },

    onError: (error) => {
      toast.error(
        error.message === "Invalid login credentials"
          ? "Invalid email or password"
          : error.message
      );
      console.error(error);
    },
  });

  return { login, isLoading };
}
