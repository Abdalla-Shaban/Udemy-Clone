import styled from "@emotion/styled";
import { Box, Button, Divider, Rating, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { CoursesCartContext } from "../../context/CartContext";

const CustomButton = styled(Button)({
  textTransform: "unset",
  color: "#a435f0",
  display: "block",
  width: "100%",
  padding: 0,
  fontWeight: "normal",
  fontSize: "12px",
});

function CoursesCartStack({ items }) {
  const { removeFromCart, saveItem } = useContext(CoursesCartContext);

  return (
    <Stack sx={{ flex: "1", gap: "18px", flexDirection: "column" }}>
      <Divider />
      {items.map((item) => (
        <Stack
          key={item.id}
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "flex-start", md: "unset" },
            gap: { xs: "30px", md: "0" },
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
              <CustomButton onClick={() => removeFromCart(item)}>
                Remove
              </CustomButton>
              <CustomButton onClick={() => saveItem(item)}>
                Save for Later
              </CustomButton>
            </Box>
            <Typography
              variant="h1"
              component="span"
              sx={{ fontWeight: "bold", fontSize: "18px", color: "#a435f0" }}
            >
              E£{item.newPrice}
            </Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}

export default CoursesCartStack;
