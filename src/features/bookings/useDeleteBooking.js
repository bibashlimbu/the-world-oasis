import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-toastify";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeleteBooking } = useMutation({
    mutationFn: deleteBookingApi,

    onSuccess: () => {
      toast.success("Booking deleted sucessfully");
      queryClient.invalidateQueries({
        queryKey: "bookings",
      });
    },
    onError: () => {
      toast.error("Booking could not be deleted");
    },
  });

  return { deleteBooking, isDeleteBooking };
}
