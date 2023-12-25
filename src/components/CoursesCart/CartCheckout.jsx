import styled from "@emotion/styled";
import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const CouponButton = styled(Button)({
  textTransform: "unset",
  backgroundColor: "#a435f0",
  boxShadow: "none",
  fontWeight: "bold",
  borderRadius: "0",
  border: "1px solid #a435f0",
  ":hover": {
    backgroundColor: "#a435f0",
    boxShadow: "none",
  },
});
const CouponTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    borderRadius: 0,
  },
  "& label.Mui-focused": {
    color: "#A0AAB4",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
      borderRight: "none",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#a435f0",
      borderWidth: "1px",
    },
  },
});

function CartCheckout({ items }) {
  return (
    <Box px={2.5}>
      <Typography
        variant="h6"
        component="span"
        sx={{
          display: "block",
          color: "GrayText",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Total:
      </Typography>
      <Typography
        variant="h1"
        component="span"
        sx={{
          display: "block",
          fontWeight: "bold",
          fontSize: "22px",
          mt: "5px",
        }}
      >
        E£
        {items.map((item) => item.newPrice).reduce((acc, curr) => acc + curr)}
      </Typography>
      <Button
        variant="contained"
        sx={{
          display: "block",
          width: { xs: "100%", sm: "50%", md: "100%" },
          my: "15px",
          py: "12px",
          borderRadius: "0",
          textTransform: "unset",
          boxShadow: "none",
          backgroundColor: "#a435f0",
          fontWeight: "bold",
          ":hover": {
            boxShadow: "none",
            backgroundColor: "#a435f0",
          },
        }}
      >
        Checkout
      </Button>
      <Divider />
      <Typography
        variant="h6"
        component="h6"
        sx={{
          fontSize: "18px",
          fontWeight: "bold",
          mt: "8px",
        }}
      >
        Promotions
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton sx={{ cursor: "pointer", color: "#000 !important" }}>
          <Close fontSize="small" />
        </IconButton>
        <Typography
          sx={{
            pr: "5px",
            textTransform: "uppercase",
            color: "GrayText",
            fontWeight: "bold",
          }}
        >
          Letslearnnow
        </Typography>
        is applied
      </Stack>
      <Stack direction="row">
        <CouponTextField
          size="small"
          id="copoun"
          label="Enter Coupon"
          variant="outlined"
        />
        <CouponButton variant="contained">Apply</CouponButton>
      </Stack>
    </Box>
  );
}

export default CartCheckout;
