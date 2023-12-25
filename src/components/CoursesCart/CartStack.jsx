import { Stack } from "@mui/material";
import CoursesCartStack from "./CoursesCartStack";
import CartCheckout from "./CartCheckout";

function CartStack({ items }) {
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", md: "row" },
        gap: "20px",
      }}
    >
      <CoursesCartStack items={items} />
      <CartCheckout items={items} />
    </Stack>
  );
}

export default CartStack;
