import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function EmptyCart({ CartButton }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        border: "1px solid #ddd",
        textAlign: "center",
        p: "40px",
        mb: 3.5,
      }}
    >
      <Box>
        <img
          src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg"
          alt="cart empty image"
        />
      </Box>
      <Typography variant="p" component="p">
        Your cart is empty. Keep shopping to find a course!
      </Typography>
      <CartButton
        onClick={() => {
          navigate("/");
          scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        Keep shopping
      </CartButton>
    </Box>
  );
}

export default EmptyCart;
