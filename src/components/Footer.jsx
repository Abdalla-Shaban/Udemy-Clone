import styled from "@emotion/styled";
import { Language } from "@mui/icons-material";
import { Box, Button, List, ListItem, Stack, Typography } from "@mui/material";
const StyledButton = styled(Button)({
  backgroundColor: "transparent",
  padding: "6px 25px",
  color: "#fff",
  textTransform: "capitalize",
  border: "1px solid #fff",
  borderRadius: "0",
  ":hover": {
    backgroundColor: "transparent",
  },
});
function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1c1d1f", color: "#fff", px: 4, py: 2 }}>
      <Stack
        sx={{
          flexDirection: { xs: "column-reverse", sm: "row" },
          gap: { xs: "25px", sm: "0" },
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "0px", md: "80px" },
            flex: 1,
          }}
        >
          <List disablePadding>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": { textDecorationLine: "underline" },
              }}
            >
              Udemy Business
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Teach on Udemy
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Get the app
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              About us
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Contact us
            </ListItem>
          </List>
          <List disablePadding>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Careers
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Blog
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Help and Support
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Affiliate
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Investors
            </ListItem>
          </List>
          <List disablePadding>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Terms
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Privacy policy
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Cookie settings
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Sitemap
            </ListItem>
            <ListItem
              sx={{
                cursor: "pointer",
                ":hover": {
                  textDecorationLine: "underline",
                },
              }}
            >
              Accessibility statement
            </ListItem>
          </List>
          {/* </Stack> */}
        </Stack>
        <Box>
          <StyledButton startIcon={<Language />}>English</StyledButton>
        </Box>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pt={4}
        pb={1}
      >
        <Typography
          component="img"
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          width="90px"
          height="30px"
        />
        <Typography variant="p" component="p">
          © 2023 Udemy, Inc.
        </Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
