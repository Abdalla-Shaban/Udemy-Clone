import { useContext, useState } from "react";
import { Box } from "@mui/material";
import { CoursesContext } from "../../context/CourseContext";
import CoursesTabs from "./CoursesTabs";
import CoursesTabPanel from "./CoursesTabPanel";

function CoursesBox() {
  const {
    data: { tabs },
  } = useContext(CoursesContext);
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <CoursesTabs tabs={tabs} value={value} handleChange={handleChange} />
      <CoursesTabPanel value={value} tabs={tabs} />
    </Box>
  );
}

export default CoursesBox;
