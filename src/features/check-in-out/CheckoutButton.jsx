import Button from "../../ui/Button";
import { useCheckout } from "./useCheckout";

function CheckoutButton({ id }) {
  const { checkout, isCheckout } = useCheckout();
  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout(id)}
      disabled={isCheckout}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
