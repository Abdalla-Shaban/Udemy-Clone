import { Box, Rating, Stack, Typography } from "@mui/material";
function CourseInfoBox({ course }) {
  return (
    <Box sx={{ width: { xs: "100%", md: "65%" }, pr: { md: "30px" } }}>
      <Typography
        variant="h3"
        lineHeight="1.2"
        mb="10px"
        sx={{ fontSize: { xs: "20px", sm: "26px", md: "32px" } }}
      >
        {course.title}
      </Typography>
      <Typography
        variant="p"
        component="p"
        sx={{
          width: { xs: "100%", sm: "85%" },
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
        }}
      >
        {course.desc}
      </Typography>
      <Stack direction="row" alignItems="center" spacing={1} mt="5px">
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          {course.rate}
          <Rating
            name="read-only"
            value={Math.floor(course.rate)}
            size="small"
            readOnly
          />
        </Typography>
        <Typography> (479,754 ratings) 1,790,074 students</Typography>
      </Stack>
      <Typography sx={{ fontSize: "12px", mt: "10px" }}>
        Created by{" "}
        <span
          style={{
            textDecorationLine: "underline",
            marginLeft: "5px",
            color: "#ddd",
          }}
        >
          {course.instructor}
        </span>
      </Typography>
    </Box>
  );
}

export default CourseInfoBox;
