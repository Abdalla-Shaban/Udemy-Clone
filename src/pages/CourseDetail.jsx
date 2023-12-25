import { Box } from "@mui/material";
import { useParams } from "react-router";
import { useContext } from "react";
import { CoursesContext } from "../context/CourseContext";
import { CourseDetails, CourseFeaturesBox } from "../components";

function CourseDetail() {
  const { id } = useParams();
  const {
    data: { courses },
  } = useContext(CoursesContext);
  const course = courses.filter((course) => course.id == id);
  return (
    <>
      {course.map((course) => (
        <Box key={course.id} bgcolor="#333">
          <CourseDetails course={course} />
          <CourseFeaturesBox course={course} />
        </Box>
      ))}
    </>
  );
}

export default CourseDetail;
