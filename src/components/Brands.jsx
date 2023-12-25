import { Box, Stack, Typography } from "@mui/material";
import brand1 from "../assets/brand-01.svg";
import brand2 from "../assets/brand-02.svg";
import brand3 from "../assets/brand-03.svg";
import brand4 from "../assets/brand-04.svg";
import brand5 from "../assets/brand-05.svg";
import brand6 from "../assets/brand-06.svg";
import brand7 from "../assets/brand-07.svg";
import brand8 from "../assets/brand-08.svg";
function Brands() {
  return (
    <Box sx={{ padding: "40px", backgroundColor: "#f7f9fa", mt: 6 }}>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#6a6f73",
          fontSize: { xs: "14px", sm: "16px", md: "22px" },
        }}
      >
        Trusted by over 14,400 companies and millions of learners around the
        world
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
        sx={{ gap: { xs: "16px", md: "0" } }}
        p="10px"
        mt={2.5}
      >
        <Typography
          sx={{ width: "50px", height: "60px" }}
          src={brand1}
          alt="Brand"
          component="img"
        />
        <Typography
          sx={{ width: "100px", height: "60px" }}
          src={brand2}
          alt="Brand"
          component="img"
        />
        <Typography
          sx={{ width: "60px", height: "60px" }}
          src={brand3}
          alt="Brand"
          component="img"
        />
        <Typography
          sx={{ width: "60px", height: "60px" }}
          src={brand4}
          alt="Brand"
          component="img"
        />
        <Typography
          sx={{ width: "60px", height: "60px" }}
          src={brand5}
          alt="Brand"
          component="img"
        />
        <Typography
          sx={{ width: "60px", height: "60px" }}
          src={brand6}
          alt="Brand"
          component="img"
        />
        <Typography
          sx={{ width: "60px", height: "60px" }}
          src={brand7}
          alt="Brand"
          component="img"
        />
        <Typography
          sx={{ width: "60px", height: "60px" }}
          src={brand8}
          alt="Brand"
          component="img"
        />
      </Stack>
    </Box>
  );
}
export default Brands;
