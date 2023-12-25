import { Container, Stack, Box, Typography } from "@mui/material";
import TestimonialCard from "./TestimonialCard";
const testimonials = [
  {
    title: "Will A",
    content:
      "I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
  },
  {
    title: "Ron F",
    content:
      "This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys :)",
  },
  {
    title: "Phillip W",
    content:
      "One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. Would help anyone become a better manager.",
  },
  {
    title: "Surya M",
    content:
      "I highly recommend this course for all budding data scientists. Even people with no prior knowledge of any visualization tools can become a master after completing this course.",
  },
];
function Testimonials() {
  return (
    <Box mt={10} p="40px" sx={{ backgroundColor: "#f7f9fa" }}>
      <Container>
        <Typography
          variant="h5"
          component="h5"
          marginBottom="20px"
          fontWeight="bold"
        >
          How learners like you are achieving their goals
        </Typography>
        <Box>
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} testimonial={testimonial} />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Testimonials;
