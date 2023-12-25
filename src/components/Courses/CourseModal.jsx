import styled from "@emotion/styled";
import { CheckCircleRounded, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { CoursesContext } from "../../context/CourseContext";
import { useNavigate } from "react-router";
import { CoursesCartContext } from "../../context/CartContext";
const CartButton = styled(Button)({
  backgroundColor: "#2d2f31",
  color: "#fff",
  textTransform: "unset",
  fontSize: "12px",
  boxShadow: "none",
  padding: "10px",
  borderRadius: "0",
  ":hover": {
    backgroundColor: "#2d2f31",
    opacity: "0.9",
    boxShadow: "none",
  },
});
function CourseModal({ course, index, open, setOpen }) {
  const {
    data: { courses },
  } = useContext(CoursesContext);
  const { addAllToCart } = useContext(CoursesCartContext);
  const navigate = useNavigate();
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      sx={{ zIndex: 999999 }}
      disableAutoFocus
    >
      <Paper
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "fit-content",
          height: "700px",
          overflow: "auto",
          bgcolor: "background.paper",
          borderRadius: "0",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb="15px">
          Added to cart
        </Typography>
        <IconButton
          onClick={() => setOpen(false)}
          sx={{ position: "absolute", right: "15px", top: "15px" }}
        >
          <Close sx={{ color: "#000" }} />
        </IconButton>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { xs: "center", md: "unset" },
            alignItems: "center",
          }}
          gap="10px"
          alignItems="center"
          mb={2}
        >
          <CheckCircleRounded fontSize="large" sx={{ color: "#19a38c" }} />
          <img
            style={{ width: "120px", height: "100px" }}
            src={course.image}
            alt={course.title}
          />
          <Stack
            sx={{
              flexDirection: "column",
              justifyContent: { xs: "center", md: "unset" },
              alignItems: { xs: "center", md: "unset" },
              textAlign: { xs: "center", md: "unset" },
            }}
            flex={1}
          >
            <Typography
              variant="h6"
              lineHeight="1.3"
              fontSize="16px"
              fontWeight="bold"
              width="75%"
            >
              {course.title}
            </Typography>
            <Typography
              variant="p"
              component="p"
              sx={{
                marginTop: "8px",
                fontSize: "14px",
                color: "GrayText",
              }}
            >
              {course.instructor}
            </Typography>
          </Stack>
          <Box textAlign="right">
            <CartButton onClick={() => navigate("/cart")}>
              Go to cart
            </CartButton>
          </Box>
        </Stack>
        <Box sx={{ border: "1px solid #000", px: 4, py: 1 }}>
          <Typography mb={1.5} variant="h6" fontWeight="bold">
            Frequently Bought Together
          </Typography>
          <Box>
            <Stack
              sx={{
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "center", md: "unset" },
                textAlign: { xs: "center", md: "unset" },
                gap: "10px",
              }}
            >
              <img
                style={{ width: "100px", height: "100px" }}
                src={course.image}
                alt={course.title}
              />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "13px", md: "16px" },
                    lineHeight: "1.2",
                  }}
                >
                  {course.title}
                </Typography>
                <Typography
                  variant="span"
                  component="span"
                  sx={{
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  {course.instructor}
                </Typography>
                <Stack
                  sx={{
                    flexDirection: "row",
                    justifyContent: { xs: "center", md: "unset" },
                    alignItems: "center",
                    mt: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "12px", md: "14px" },
                    }}
                  >
                    {course.rate}
                  </Typography>
                  <Rating
                    name="read-only"
                    value={Math.floor(course.rate)}
                    size="small"
                    readOnly
                  />
                  {`(${course.rateCount})`}
                </Stack>
              </Box>
              <Typography
                variant="h1"
                component="span"
                sx={{ fontWeight: "bold", fontSize: "18px" }}
              >
                E£{course.newPrice}
              </Typography>
            </Stack>
          </Box>
          {courses
            .filter((item) => item.category === course.category)
            .map((item) => (
              <Box key={item.id} mt={1.5}>
                <Stack
                  sx={{
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "unset" },
                    textAlign: { xs: "center", md: "unset" },
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={item.image}
                    alt={item.title}
                  />
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: { xs: "13px", md: "16px" },
                        lineHeight: "1.2",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="span"
                      component="span"
                      sx={{
                        fontSize: { xs: "12px", md: "14px" },
                      }}
                    >
                      {item.instructor}
                    </Typography>
                    <Stack
                      sx={{
                        flexDirection: "row",
                        justifyContent: { xs: "center", md: "unset" },
                        alignItems: "center",
                        mt: 0.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "12px", md: "14px" },
                        }}
                      >
                        {item.rate}
                      </Typography>
                      <Rating
                        name="read-only"
                        value={Math.floor(item.rate)}
                        size="small"
                        readOnly
                      />
                      {`(${item.rateCount})`}
                    </Stack>
                  </Box>
                  <Typography
                    variant="h1"
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      fontSize: "18px",
                      textAlign: "right",
                    }}
                  >
                    E£{item.newPrice}
                  </Typography>
                </Stack>
              </Box>
            ))
            .slice(index + 1, 3)}
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ padding: { xs: "10px 0", md: 2 }, mt: { xs: 3, md: 1.5 } }}
          >
            <Typography fontWeight="bold">
              Total: E£
              {courses
                .filter((item) => item.category === course.category)
                .map((item) => item.newPrice)
                .slice(index, 3)
                .reduce((acc, curr) => acc + curr, index)}
            </Typography>
            <CartButton
              sx={{ bgcolor: "#8710d8 !important", fontWeight: "bold" }}
              onClick={() => {
                addAllToCart(
                  courses
                    .filter((item) => item.category === course.category)
                    .map((item) => item)
                    .slice(index, 3)
                );
                navigate("/cart");
                scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Add all to cart
            </CartButton>
          </Stack>
        </Box>
      </Paper>
    </Modal>
  );
}

export default CourseModal;
