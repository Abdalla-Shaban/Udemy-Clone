import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { CoursesContext } from "../../context/CourseContext";
import {
  ChevronRight,
  Close,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { CoursesCartContext } from "../../context/CartContext";
const CustomButton = styled(Button)({
  backgroundColor: "transparent",
  color: "#5624d0",
  fontSize: "12px",
  textTransform: "unset",
  padding: "5px 0 !important",
  ":hover": {
    background: "unset",
  },
});
function MobileNav({ open, setOpen }) {
  open
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  const {
    data: { categories },
  } = useContext(CoursesContext);
  const { items } = useContext(CoursesCartContext);
  const navigate = useNavigate();
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ display: { md: "none" } }}
      >
        <IconButton>
          <Search />
        </IconButton>
        <IconButton onClick={() => navigate("/cart")}>
          <Badge badgeContent={items.length}>
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
      </Stack>
      {open && (
        <>
          <Box
            onClick={() => setOpen(false)}
            sx={{
              backgroundColor: "rgba(45,47,49,.8)",
              position: "absolute",
              transition: "0.3s",
              width: "calc(100% - 8px)",
              minHeight: "100%",
              left: open ? "0" : "-250px",
              top: 0,
              zIndex: 999,
            }}
          ></Box>
          <Stack
            sx={{
              position: "absolute",
              transition: "0.3s",
              width: "220px",
              minHeight: "100%",
              backgroundColor: "#fff",
              left: open ? "-8px" : "-250px",
              top: 0,
              zIndex: 9999,
            }}
          >
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                right: "-50px",
                top: "20px",
                backgroundColor: "#fff",
                zIndex: 9999,
                ":hover": {
                  background: "#f2f2f2",
                },
              }}
            >
              <Close />
            </IconButton>
            <Stack py={1} direction="column" alignSelf="flex-start">
              <CustomButton href="/login">Sign in</CustomButton>
              <CustomButton href="/signup">Sign up</CustomButton>
            </Stack>
            <Divider />
            <Box sx={{ position: "relative", zIndex: 9999, p: 1 }}>
              <Typography
                color="gray"
                fontSize="12px"
                my="3px"
                fontWeight="bold"
              >
                Most Popular
              </Typography>
              <List disablePadding>
                {categories.slice(0, 8).map((category, i) => (
                  <ListItem
                    sx={{
                      px: 0,
                      fontSize: "13px",
                      color: "#000",
                      ":hover": {
                        color: "#5624d0",
                      },
                    }}
                    key={i}
                  >
                    <Link
                      onClick={() => setOpen(false)}
                      to={`/${category.slice(0, 3)}`}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        transition: "0.5s",
                        fontSize: "13px",
                        color: "inherit",
                        p: "0",
                      }}
                    >
                      {category}
                      <ChevronRight fontSize="small" sx={{ ml: "auto" }} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Divider />
            <Box sx={{ position: "relative", zIndex: 9999, p: 1 }}>
              <Typography
                color="gray"
                fontSize="12px"
                my="3px"
                fontWeight="bold"
              >
                Most from Udemy
              </Typography>
              <List disablePadding>
                <ListItem
                  sx={{
                    px: 0,
                    fontSize: "13px",
                    color: "#000",
                    ":hover": {
                      color: "#5624d0",
                    },
                  }}
                >
                  Udemy Business
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    fontSize: "13px",
                    color: "#000",
                    ":hover": {
                      color: "#5624d0",
                    },
                  }}
                >
                  Get the app
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    fontSize: "13px",
                    color: "#000",
                    ":hover": {
                      color: "#5624d0",
                    },
                  }}
                >
                  Invite friends
                </ListItem>
                <ListItem
                  sx={{
                    px: 0,
                    fontSize: "13px",
                    color: "#000",
                    ":hover": {
                      color: "#5624d0",
                    },
                  }}
                >
                  Help
                </ListItem>
              </List>
            </Box>
          </Stack>
        </>
      )}
    </>
  );
}

export default MobileNav;
