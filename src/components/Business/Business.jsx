import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import styled from "@emotion/styled";
const StyledButton = styled(Button)({
  backgroundColor: "#2d2f31",
  textTransform: "capitalize",
  padding: "10px",
  borderRadius: "0",
  border: "1px solid #2d2f31",
  color: "#fff",
  fontWeight: "bold",
  transition: "0.3s",
  ":hover": { backgroundColor: "#2d2f31", opacity: "0.8" },
});
function Business() {
  return (
    <Box sx={{ backgroundColor: "#f7f9fa", p: "20px", mt: 10 }}>
      <Container sx={{ px: { xs: "0", md: "16px" } }}>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: { xs: "center", md: "unset" },
            gap: { xs: "25px", md: "20px" },
            py: "30px",
          }}
        >
          <Box
            sx={{
              width: { md: "400px" },
              order: { xs: 2, md: "unset" },
            }}
          >
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
                component="img"
                sx={{
                  width: "190px",
                  height: "32px",
                  mb: { xs: "3px", md: "8px" },
                }}
              />
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "18px", md: "24px", lineHeight: "1.2" },
                }}
              >
                Upskill your team with Udemy Business
              </Typography>
            </Box>
            <List>
              <ListItem sx={{ pl: 0 }}>
                <FiberManualRecordIcon
                  sx={{ mr: "2px", fontSize: "10px", width: "30px" }}
                />
                <Typography variant="span" component="p">
                  Unlimited access to 22,000+ top Udemy courses, anytime,
                  anywhere
                </Typography>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <FiberManualRecordIcon
                  sx={{ mr: "2px", fontSize: "10px", width: "30px" }}
                />
                <Typography variant="span" component="p">
                  International course collection in 14 languages
                </Typography>
              </ListItem>
              <ListItem sx={{ pl: 0 }}>
                <FiberManualRecordIcon
                  sx={{ mr: "2px", fontSize: "10px", width: "30px" }}
                />
                <Typography variant="span" component="p">
                  Top certifications in tech and business
                </Typography>
              </ListItem>
            </List>
            <Stack
              sx={{
                mt: { xs: 1, md: 3.5 },
                justifyContent: { xs: "center", md: "unset" },
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                gap: "5px",
              }}
            >
              <StyledButton sx={{ width: { xs: "100%", md: "auto" } }}>
                Get Udemy Business
              </StyledButton>
              <StyledButton
                sx={{
                  width: { xs: "100%", md: "auto" },
                  backgroundColor: "white !important",
                  color: "#2d2f31 !important",
                }}
              >
                Learn more
              </StyledButton>
            </Stack>
          </Box>
          <Box
            sx={{
              width: { sm: "540px", md: "400px" },
              height: { sm: "540px", md: "400px" },
              maxWidth: { xs: "500px", md: "400px" },
              order: { xs: 1, md: "unset" },
              px: "15px",
            }}
          >
            <Typography
              src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
              component="img"
              sx={{ maxWidth: "100%", maxHeight: "100%", mx: "auto" }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Business;
