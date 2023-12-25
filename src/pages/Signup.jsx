import styled from "@emotion/styled";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

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
function Signup() {
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
          Sign up and start learning
        </Typography>
        <LoginTextField label="Full name" type="text" />
        <LoginTextField label="Email" type="email" />
        <LoginTextField label="Password" type="password" />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
          my={0.5}
        >
          <Checkbox
            sx={{
              alignSelf: "flex-start",
              "&.Mui-checked": {
                color: "#a435f0",
              },
            }}
          />
          <Typography sx={{ mt: 1 }} fontSize="14px">
            Send me special offers, personalized recommendations, and learning
            tips.
          </Typography>
        </Stack>
        <LoginButton>Sign up</LoginButton>
        <Typography textAlign="center" fontSize="12px" my={1}>
          By signing up, you agree our<Link to="">Terms of Use</Link> and{" "}
          <Link to="">Privacy Policy</Link>
        </Typography>
        <Divider />
        <Typography textAlign="center">
          Already have an account?<Link to="/login">Log in</Link>
        </Typography>
      </Stack>
    </Container>
  );
}

export default Signup;
