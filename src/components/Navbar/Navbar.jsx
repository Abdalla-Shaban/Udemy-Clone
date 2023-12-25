import {
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  List,
  ListItem,
  Paper,
  Stack,
  Tooltip,
  Typography,
  tooltipClasses,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import logo from "../../assets/logo-udemy.svg";
import { useContext, useState } from "react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { CoursesContext } from "../../context/CourseContext";
import { Menu } from "@mui/icons-material";
import MobileNav from "./MobileNav";
import { CoursesCartContext } from "../../context/CartContext";
const OutlinedButton = styled(Button)({
  backgroundColor: "#fff",
  color: "#000",
  textTransform: "capitalize",
  borderRadius: "0",
  border: "1px solid #000",
  boxShadow: "none",
  ":hover": {
    backgroundColor: "#fff",
    boxShadow: "none",
    borderColor: "#000",
  },
});
const ContainedButton = styled(Button)({
  backgroundColor: "#000",
  color: "#fff",
  textTransform: "capitalize",
  borderRadius: "0",
  border: "1px solid #000",
  boxShadow: "none",
  ":hover": {
    backgroundColor: "#000",
    boxShadow: "none",
  },
});
const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "#000",
  },
}));

function Navbar() {
  const {
    data: { categories },
  } = useContext(CoursesContext);
  const { items } = useContext(CoursesCartContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header>
      <nav
        style={{
          boxShadow: "0 0 10px #ddd",
          padding: "10px",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center" width="100%">
          <IconButton
            sx={{
              display: { xs: "flex", md: "none" },
              minWidth: "80px",
              ":hover": {
                background: "unset",
              },
            }}
            onClick={() => setOpen(!open)}
          >
            <Menu />
          </IconButton>
          <Box
            sx={{
              flex: { xs: 1, md: "unset" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to="/">
              <Typography
                src={logo}
                alt="logo"
                sx={{ width: 91, height: 31 }}
                component="img"
              />
            </Link>
          </Box>

          <MobileNav open={open} setOpen={setOpen} />
          <StyledTooltip
            title={
              <List sx={{ minWidth: "300px" }}>
                {categories.map((category, i) => (
                  <ListItem key={i}>
                    <Link
                      to={`/${category.slice(0, 3).trim()}`}
                      style={{ width: "100%", textDecoration: "none" }}
                    >
                      <Button
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          textTransform: "capitalize",
                          color: "#000",
                          fontSize: "1rem",
                          p: "0",
                          ":hover": {
                            color: "#5624d0",
                            background: "unset",
                          },
                        }}
                        endIcon={<ChevronRightIcon />}
                      >
                        {category}
                      </Button>
                    </Link>
                  </ListItem>
                ))}
              </List>
            }
          >
            <Button
              sx={{
                display: { xs: "none", md: "inline-block" },
                textTransform: "capitalize",
                color: "#000",
                fontSize: "1rem",
                ":hover": {
                  color: "#5624d0",
                  background: "unset",
                },
              }}
            >
              Categories
            </Button>
          </StyledTooltip>
          <Paper
            sx={{
              p: "2px 4px",
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              flex: 1,
              borderRadius: "1.5rem",
              boxShadow: "unset",
              border: "1px solid #000",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, borderRadius: "30%" }}
              placeholder="search for anything"
              inputProps={{ "aria-label": "search google maps" }}
            />
          </Paper>
          <Stack
            direction="row"
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <StyledTooltip
              title={
                <List sx={{ p: 1.5 }}>
                  <ListItem disablePadding>
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        my: 1,
                        lineHeight: "1.4",
                      }}
                    >
                      Get your team access to over 22,000 top Udemy courses,
                      anytime, anywhere.
                    </Typography>
                  </ListItem>
                  <ContainedButton
                    variant="contained"
                    sx={{ py: "12px", width: "100%" }}
                  >
                    Learn More
                  </ContainedButton>
                </List>
              }
            >
              <Button
                sx={{
                  display: { xs: "none", lg: "inline-block" },
                  textTransform: "capitalize",
                  color: "#000",
                  fontSize: "1rem",
                  ":hover": {
                    color: "#5624d0",
                    background: "unset",
                  },
                }}
              >
                Udemy Business
              </Button>
            </StyledTooltip>
            <StyledTooltip
              title={
                <List sx={{ p: 1.5 }}>
                  <ListItem disablePadding>
                    <Typography
                      variant="h6"
                      component="span"
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        my: 1,
                        lineHeight: "1.4",
                      }}
                    >
                      Turn what you know into an opportunity and reach millions
                      around the world.
                    </Typography>
                  </ListItem>
                  <ContainedButton
                    variant="contained"
                    sx={{ py: "12px", width: "100%" }}
                  >
                    Learn More
                  </ContainedButton>
                </List>
              }
            >
              <Button
                sx={{
                  display: { xs: "none", md: "inline-block" },
                  textTransform: "capitalize",
                  color: "#000",
                  fontSize: "1rem",
                  ":hover": {
                    color: "#5624d0",
                    background: "unset",
                  },
                }}
              >
                Teach on Udemy
              </Button>
            </StyledTooltip>
          </Stack>
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              display: { xs: "none", md: "inline-block" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Badge
              badgeContent={items.length}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartIcon />
            </Badge>
            <OutlinedButton variant="outlined" href="/login">
              Log in
            </OutlinedButton>
            <ContainedButton variant="contained" href="/signup">
              Sign up
            </ContainedButton>
            <OutlinedButton variant="outlined">
              <LanguageIcon />
            </OutlinedButton>
          </Stack>
        </Stack>
      </nav>
    </header>
  );
}

export default Navbar;
