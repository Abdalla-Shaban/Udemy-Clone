import { Box, Container, Paper, Typography } from "@mui/material";
import herosection from "../assets/herosection.jpg";
function HeroSection() {
  return (
    <Container
      maxWidth="xl"
      sx={{ pt: "-10px", position: "relative", px: { xs: "0", md: "16px" } }}
    >
      <Typography
        sx={{ width: "100%", height: "100%", backgroundSize: "cover" }}
        component="img"
        src={herosection}
        alt="Hero Section Image"
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: "15px", sm: "30px", md: "40px" },
          left: "5%",
        }}
      >
        <Paper
          sx={{
            width: { xs: "200px", sm: "270px", md: "400px" },
            padding: { xs: "10px", sm: "15px", md: "20px" },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "20px", sm: "26px", md: "32px" },
              lineHeight: 1.1,
              mb: 1,
            }}
          >
            It&apos;s the last day for this sale
          </Typography>
          <Typography
            variant="body1"
            fontSize={{ xs: "12px", sm: "16px", md: "18px" }}
            sx={{ padding: 0, margin: 0 }}
          >
            Log in to see how much you can save on highly rated courses.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default HeroSection;
