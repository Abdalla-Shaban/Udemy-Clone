import { Box, Typography, Divider } from "@mui/material";
import { useContext } from "react";
import { CoursesCartContext } from "../../context/CartContext";

import CourseStack from "./CourseStack";

function SavedItemsStack() {
  const { savedItems } = useContext(CoursesCartContext);
  return (
    <>
      {savedItems.length > 0 && (
        <Box mt={10}>
          <Typography variant="h6" fontWeight="bold">
            Saved for later
          </Typography>
          <Divider />
          {savedItems.map((item) => (
            <CourseStack item={item} key={item.id} />
          ))}
        </Box>
      )}
    </>
  );
}

export default SavedItemsStack;
