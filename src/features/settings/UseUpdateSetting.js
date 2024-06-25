import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

export function useUpdaetSetting() {
  const queryClient = useQueryClient();
  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting updated sucessfully");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: () => toast.error("Setting could not be edited"),
  });

  return { isUpdating, updateSetting };
}
