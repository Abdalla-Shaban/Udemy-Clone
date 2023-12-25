import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Tooltip,
  tooltipClasses,
  Zoom,
} from "@mui/material";
import CourseInfo from "./CourseInfo";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import CourseModal from "./CourseModal";
const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    padding: "20px",
  },
  [`& .${tooltipClasses.tooltipArrow}`]: {
    padding: "0",
  },
  [`& .${tooltipClasses.arrow}`]: {
    fontSize: "20px",
    color: "#ccc",
  },
}));
function CoursesCard({ course, index }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <CourseModal course={course} index={index} open={open} setOpen={setOpen} />
      <StyledTooltip
        title={<CourseInfo course={course} open={open} setOpen={setOpen} />}
        arrow={true}
        placement="right"
        TransitionComponent={Zoom}
      >
        <Card
          sx={{
            width: "250px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link
            style={{
              textDecorationLine: "none",
              width: " 100%",
              color: "inherit",
            }}
            to={`/course/${course.id}`}
            onClick={() =>
              scrollTo({
                top: "0",
                behavior: "smooth",
              })
            }
          >
            <CardMedia
              component="img"
              alt={course.title}
              sx={{ maxHeight: "170px" }}
              image={course.image}
            />
            <CardContent sx={{ width: "100%", position: "relative" }}>
              <Typography
                gutterBottom
                fontWeight="bolder"
                fontSize="1.15rem"
                letterSpacing="-0.5px"
                lineHeight="1.2"
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="noWrap"
                variant="h6"
              >
                {course.title}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="noWrap"
              >
                {course.instructor}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                fontWeight="bold"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                {course.rate}
                <Rating
                  name="read-only"
                  value={Math.floor(course.rate)}
                  size="small"
                  readOnly
                />
                <Typography
                  variant="subtitle2"
                  component="span"
                  color="text.secondary"
                >
                  {`(${course.rateCount})`}
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  pb: `${course.isBest ? "10px " : "0"}`,
                }}
              >
                E£{course.newPrice}
                <del
                  style={{
                    color: "GrayText",
                    fontWeight: "normal",
                  }}
                >
                  E£
                  {course.price}
                </del>
              </Typography>
              {course.isBest && (
                <Typography
                  variant="span"
                  sx={{
                    position: "absolute",
                    backgroundColor: "#eceb98",
                    p: "5px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    bottom: "5px",
                    right: "5px",
                  }}
                >
                  Bestseller
                </Typography>
              )}
            </CardContent>
          </Link>
        </Card>
      </StyledTooltip>
    </>
  );
}
export default CoursesCard;
