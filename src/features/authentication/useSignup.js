import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-toastify";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account created sucessfully! verify the user's email address"
      );
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { signup, isLoading };
}
