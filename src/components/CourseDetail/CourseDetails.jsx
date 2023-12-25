import { Container, Stack } from "@mui/material";

import CourseDetailPaper from "./CourseDetailPaper";
import CourseInfoBox from "./CourseInfoBox";

function CourseDetails({ course }) {
  return (
    <Container sx={{ position: "relative" }}>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "unset" },
        }}
        color="#fff"
        py="40px"
        gap="30px"
      >
        <CourseInfoBox course={course} />
        <CourseDetailPaper course={course} />
      </Stack>
    </Container>
  );
}

export default CourseDetails;
