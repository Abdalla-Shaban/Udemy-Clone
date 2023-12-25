import {
  Paper,
  Typography,
  Box,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { Check, FavoriteBorder } from "@mui/icons-material";
import styled from "@emotion/styled";
import { useContext } from "react";
import { CoursesCartContext } from "../../context/CartContext";
import { useNavigate } from "react-router";

const CartButton = styled(Button)({
  backgroundColor: "#8710d8",
  textTransform: "unset",
  boxShadow: "none",
  ":hover": {
    backgroundColor: "#8710d8",
    opacity: "0.9",
    boxShadow: "none",
  },
});
function CourseInfo({ course, open, setOpen }) {
  const { addToCart, items } = useContext(CoursesCartContext);
  const navigate = useNavigate();
  return (
    <Paper sx={{ padding: "15px", display: open ? "none" : "block" }}>
      <Box>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            lineHeight: "1.3",
            fontSize: "1.05rem",
            fontWeight: "bold",
            mb: "6px",
          }}
        >
          {course.title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="#388e3c"
          fontSize="12px"
          mb={course.isBest ? "5px" : "0"}
        >
          {course.isBest && (
            <Typography
              variant="span"
              sx={{
                backgroundColor: "#eceb98",
                p: "5px",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#000",
              }}
            >
              Best Seller
            </Typography>
          )}{" "}
          Updated {course.date}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: "GrayText", fontSize: "10px", mb: "5px" }}
        >
          {course.hours} total hours All Levels Subtitles
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "14px" }}>
          {course.desc}
        </Typography>
      </Box>
      {course.learn.map((text, index) => (
        <Box key={index} mt="10px">
          <Typography
            component="p"
            display="flex"
            alignItems="center"
            gap="10px"
            fontSize="13px"
            sx={{
              ":not(:lastChild)": {
                mb: "10px",
              },
            }}
          >
            {" "}
            <Check fontSize="small" />
            {text}
          </Typography>
        </Box>
      ))}
      <Stack direction="row" mt={2.5}>
        {!items.find((item) => item.id == course.id) ? (
          <CartButton
            variant="contained"
            sx={{ flex: 1 }}
            onClick={() => {
              addToCart(course);
              setOpen(true);
            }}
          >
            Add to cart
          </CartButton>
        ) : (
          <CartButton
            variant="contained"
            sx={{ flex: 1 }}
            onClick={() => navigate("/cart")}
          >
            Go to cart
          </CartButton>
        )}
        <IconButton
          sx={{
            ml: 1,
            width: "44px",
            height: "44px",
            color: "#000",
            border: "1px solid #000",
          }}
        >
          <FavoriteBorder fontSize="medium" />
        </IconButton>
      </Stack>
    </Paper>
  );
}

export default CourseInfo;
