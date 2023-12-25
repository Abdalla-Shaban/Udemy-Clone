import { Button, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { CoursesCartContext } from "../context/CartContext";
import styled from "@emotion/styled";
import { CartStack, EmptyCart, SavedItemsStack } from "../components";

const CartButton = styled(Button)({
  backgroundColor: "#8710d8",
  color: "#fff",
  textTransform: "unset",
  fontSize: "14px",
  fontWeight: "bold",
  boxShadow: "none",
  padding: "10px",
  marginTop: "20px",
  borderRadius: "0",
  ":hover": {
    backgroundColor: "#8710d8",
    opacity: "0.9",
    boxShadow: "none",
  },
});
function CoursesCart() {
  const { items } = useContext(CoursesCartContext);
  return (
    <Container sx={{ mb: 5 }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", lineHeight: "1.2", my: 2 }}
      >
        Shopping Cart
      </Typography>
      <Typography
        variant="span"
        component="span"
        fontWeight="bold"
        display="block"
        mb={1}
      >
        {items.length} Courses in Cart
      </Typography>
      {items.length < 1 ? (
        <EmptyCart CartButton={CartButton} />
      ) : (
        <CartStack items={items} />
      )}
      <SavedItemsStack />
    </Container>
  );
}

export default CoursesCart;
