import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { CoursesCartContext } from "../../context/CartContext";
import styled from "@emotion/styled";

const CustomButton = styled(Button)({
  textTransform: "unset",
  color: "#a435f0",
  display: "block",
  width: "100%",
  padding: 0,
  fontWeight: "normal",
  fontSize: "12px",
});
function CourseStack({ item }) {
  const { removeFromSaved, addToCart } = useContext(CoursesCartContext);
  return (
    <Stack
      sx={{
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", sm: "flex-start", md: "unset" },
        gap: { xs: "30px", md: "0" },
        mt: 1
      }}
    >
      <Stack direction="row" gap="10px">
        <Box
          sx={{
            border: "1px solid #ddd",
            maxWidth: "150px",
            textAlign: "center",
          }}
        >
          <img
            style={{ maxWidth: "150px", height: "100%" }}
            src={item.image}
            alt={item.title}
          />
        </Box>
        <Box>
          <Typography fontWeight="bold">{item.title}</Typography>
          <Typography my="5px" fontSize="12px" sx={{ color: "GrayText" }}>
            By <span style={{ fontWeight: "bold" }}>{item.instructor}</span>
          </Typography>
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: { xs: "center", md: "unset" },
              alignItems: "center",
              mt: 0.5,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "12px", md: "14px" },
              }}
            >
              {item.rate}
            </Typography>
            <Rating
              name="read-only"
              value={Math.floor(item.rate)}
              size="small"
              readOnly
            />
            {`(${item.rateCount})`}
          </Stack>
        </Box>
      </Stack>
      <Stack direction="row" alignItems="start" gap="15px">
        <Box sx={{ textAlign: "center" }}>
          <CustomButton onClick={() => removeFromSaved(item)}>
            Remove
          </CustomButton>
          <CustomButton onClick={() => addToCart(item)}>
            Move to cart
          </CustomButton>
        </Box>
        <Typography
          variant="h1"
          component="span"
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            color: "#a435f0",
          }}
        >
          E£{item.newPrice}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default CourseStack;
