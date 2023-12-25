import styled from "@emotion/styled";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import {
  OndemandVideo,
  UploadFile,
  Smartphone,
  AllInclusive,
  EmojiEventsOutlined,
  AccessAlarmOutlined,
  PlayCircleFilledOutlined,
} from "@mui/icons-material";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { CoursesCartContext } from "../../context/CartContext";

const CardButton = styled(Button)({
  fontWeight: "bold",
  textTransform: "unset",
  backgroundColor: "#a435f0",
  borderRadius: "0",
  border: "1px solid #a435f0",
  color: "#fff",
  padding: "10px",
  transition: "0.3s",
  ":hover": {
    background: "#a435f0",
    opacity: "0.8",
  },
});

function CourseDetailPaper({ course }) {
  const { id } = useParams();
  const { addToCart, items } = useContext(CoursesCartContext);
  const foundItem = items.find((item) => item.id == id);
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        border: "1px solid #fff",
        borderRadius: "0",
        width: { xs: "100%", sm: "350px" },
        position: { xs: "relative", md: "absolute" },
        right: { md: "30px" },
        top: { md: "30px" },
      }}
    >
      <Box>
        <Box position="relative">
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "calc(100% - 5px)",
              top: 0,
              left: 0,
              backgroundColor: "rgb(0 0 0 / 0.4 )",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
            }}
          >
            <PlayCircleFilledOutlined
              sx={{ fontSize: "65px", cursor: "pointer", mt: "auto" }}
            />
            <Typography fontWeight="bold" mt="auto" mb="5px">
              Preview this course
            </Typography>
          </Box>
          <img
            src={course.image}
            alt={course.title}
            style={{ width: "100%" }}
          />
        </Box>
        <Box sx={{ padding: "20px 15px" }}>
          <Stack direction="row" gap="10px" alignItems="center">
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: { xs: "18px", sm: "22px", md: "28px" },
              }}
            >
              E£{course.newPrice}
            </Typography>
            <Typography>
              <del style={{ color: "GrayText" }}>E£{course.price}</del>
            </Typography>
          </Stack>
          <Typography fontWeight="bold">80% off</Typography>
          <Typography color="#b32d0f" mb="12px">
            <AccessAlarmOutlined sx={{ fontSize: "16px" }} />
            <span style={{ fontWeight: "bold" }}>1 day</span> left at this
            price!
          </Typography>
          <Stack direction="column" spacing={0.6} px={0.8}>
            {!foundItem ? (
              <CardButton onClick={() => addToCart(course)}>
                Add to cart
              </CardButton>
            ) : (
              <CardButton onClick={() => navigate("/cart")}>
                Go to cart
              </CardButton>
            )}
            <CardButton
              sx={{
                backgroundColor: "#fff !important",
                borderColor: "#000 !important",
                color: "#000 !important",
              }}
            >
              Buy now
            </CardButton>
            <Typography
              component="span"
              textAlign="center"
              fontSize="13px"
              textTransform="capitalize"
              pt={0.8}
            >
              30-day-money-back guarantee
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Typography variant="h6" fontWeight="bold" px={2}>
            This course includes:
          </Typography>
          <List>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              <OndemandVideo sx={{ fontSize: "16px" }} /> 9.5 hours on-demand
              video
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              <UploadFile sx={{ fontSize: "16px" }} /> 95 downloadable resources
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              <Smartphone sx={{ fontSize: "16px" }} /> Access on mobile and TV
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              <AllInclusive sx={{ fontSize: "16px" }} /> Full lifetime access
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
              }}
            >
              <EmojiEventsOutlined sx={{ fontSize: "16px" }} /> Certificate of
              completion
            </ListItem>
          </List>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          pb="20px"
          pt="10px"
        >
          <Typography
            sx={{
              textDecorationLine: "underline",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Share
          </Typography>
          <Typography
            sx={{
              textDecorationLine: "underline",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Gift this course
          </Typography>
          <Typography
            sx={{
              textDecorationLine: "underline",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Apply coupon
          </Typography>
        </Stack>
        <Divider />
        <Box padding="20px 15px">
          <Typography variant="h6" fontWeight="bold" mb="3px">
            Training 5 or more people?
          </Typography>
          <Typography variant="p" component="p" fontSize="16px" mb="18px">
            Get your team access to 22,000+ top Udemy courses anytime, anywhere.
          </Typography>
          <CardButton
            sx={{
              backgroundColor: "#fff !important",
              borderColor: "#000 !important",
              color: "#000 !important",
              width: "100%",
            }}
          >
            Try Udemy Business
          </CardButton>
        </Box>
      </Box>
    </Paper>
  );
}

export default CourseDetailPaper;
