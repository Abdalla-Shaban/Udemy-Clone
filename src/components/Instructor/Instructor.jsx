import styled from "@emotion/styled";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
const StyledButton = styled(Button)({
  backgroundColor: "#2d2f31",
  textTransform: "capitalize",
  padding: "10px",
  borderRadius: "0",
  border: "1px solid #2d2f31",
  color: "#fff",
  fontWeight: "bold",
  transition: "0.3s",
  ":hover": { backgroundColor: "#2d2f31", opacity: "0.8" },
});
function Instructor() {
  return (
    <Box sx={{ p: "0px", my: 6 }}>
      <Container>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography
            component="img"
            src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
            sx={{
              width: "400px",
              height: "400px",
              maxWidth: { xs: "350px", sm: "400px" },
              maxHeight: { xs: "350px", sm: "400px" },
            }}
          />
          <Box
            sx={{
              width: { md: "400px" },
              maxWidth: { xs: "540px", md: "100%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              component="h3"
              mb="10px"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "24px", md: "32px" },
                mb: { xs: "5px", md: "10px" },
              }}
            >
              Become an instructor
            </Typography>
            <Typography
              variant="body1"
              component="p"
              mb="10px"
              sx={{ fontSize: { xs: "14px", md: "16px" } }}
            >
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </Typography>
            <StyledButton>Start teaching today</StyledButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Instructor;
