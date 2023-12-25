import styled from "@emotion/styled";
import { Apple, Facebook, Google } from "@mui/icons-material";
import {
  Button,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const SocialButton = styled(Button)({
  color: "inherit",
  borderColor: "inherit",
  borderRadius: "0",
  padding: "15px 20px",
  textTransform: "unset",
  textAlign: "left !important",
  justifyContent: "flex-start",
  gap: "5px",
  ":hover": {
    borderColor: "inherit",
  },
});
const LoginTextField = styled(TextField)({
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
      borderColor: "#000",
    },
    "&:hover fieldset": {
      borderColor: "#000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#a435f0",
      borderWidth: "2px",
    },
  },
});
const LoginButton = styled(Button)({
  color: "#fff",
  fontSize: "16px",
  textTransform: "unset",
  backgroundColor: "#a435f0",
  boxShadow: "none",
  fontWeight: "bold",
  borderRadius: "0",
  padding: "10px",
  border: "1px solid #a435f0",
  ":hover": {
    backgroundColor: "#a435f0",
  },
});
function Login() {
  return (
    <Container sx={{ py: 6 }}>
      <Stack
        sx={{
          width: { xs: "250px", sm: "300px", md: "350px" },
          flexDirection: "column",
          gap: "10px",
          justifyContent: "center",
          mx: "auto",
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          fontSize="18px"
          textAlign="left"
          mb={1}
        >
          Log in to your Udemy account
        </Typography>
        <SocialButton variant="outlined" startIcon={<Google />}>
          Continue with Google
        </SocialButton>
        <SocialButton variant="outlined" startIcon={<Facebook />}>
          Continue with Facebook
        </SocialButton>
        <SocialButton variant="outlined" startIcon={<Apple />}>
          Continue with Apple
        </SocialButton>
        <LoginTextField label="Email" type="email" />
        <LoginTextField label="Password" type="password" />
        <LoginButton>Log in</LoginButton>
        <Typography textAlign="center" my={1}>
          or <Link to="">Forgot Password</Link>
        </Typography>
        <Divider />
        <Stack direction="column" alignItems="center">
          <Typography>
            Don&apos;t have an account?<Link to="/signup">Sign up</Link>
          </Typography>
          <Link to="">Log in with your organiztion</Link>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Login;
