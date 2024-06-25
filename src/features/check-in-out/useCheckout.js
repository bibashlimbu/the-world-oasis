import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-toastify";

export function useCheckout() {
  const queryClient = useQueryClient();
  const { mutate: checkout, isLoading: isCheckout } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`Booking ${data.id} has been sucessfully checked-out`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => {
      toast.error("There was some problem with checkedout");
    },
  });
  return { checkout, isCheckout };
}
