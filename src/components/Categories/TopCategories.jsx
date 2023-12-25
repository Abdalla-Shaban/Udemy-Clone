import { Box, Container, Stack, Typography } from "@mui/material";
import CategoryCard from "./CategoryCard";
const categories = [
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
    title: "Design",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
    title: "Development",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
    title: "Marketing",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
    title: "IT and Software",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg",
    title: "Personal Development",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
    title: "Business",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
    title: "Photography",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
    title: "Music",
  },
];
function TopCategories() {
  return (
    <Box sx={{ mt: { xs: 4, md: 7 } }}>
      <Container sx={{ px: { xs: "15px", md: "40px" } }}>
        <Typography
          variant="h6"
          component="h6"
          fontWeight="bold"
          marginBottom="16px"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          Top Categories
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          flexWrap="wrap"
          gap="20px"
          p="2px"
          sx={{ widht: "100%" }}
        >
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default TopCategories;
