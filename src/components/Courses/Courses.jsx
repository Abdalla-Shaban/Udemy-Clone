import { Box, Container, Typography } from "@mui/material";
import CoursesBox from "./CoursesBox";

function Courses() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          px: 3,
          mt: { xs: 3, sm: 5, md: 7 },
          mb: { xs: "3px", sm: "6px", md: "8px" },
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "20px", sm: "24px", md: "30px" },
            mb: { xs: "2px", sm: "5px", md: "8px" },
          }}
        >
          A broad selection of courses
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" } }}
        >
          Choose from over 210,000 online video courses with new additions
          published every month
        </Typography>
      </Box>
      <CoursesBox />
    </Container>
  );
}

export default Courses;
