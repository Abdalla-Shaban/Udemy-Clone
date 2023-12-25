import { Card, CardContent, CardMedia, Typography } from "@mui/material";

function CategoryCard({ category }) {
  return (
    <Card sx={{ backgroundColor: "#f7f9fa", width: "260px" }}>
      <CardMedia
        src={category.image}
        alt={category.title}
        component="img"
        sx={{
          transition: "0.3s",
          ":hover": {
            scale: "1.1",
          },
        }}
      />
      <CardContent
        sx={{
          p: 0,
          ":last-child": {
            pb: 0,
          },
        }}
      >
        <Typography
          variant="h5"
          component="p"
          sx={{
            width: "100%",
            height: "100%",
            mt: 2,
            fontSize: "1rem",
            fontWeight: "bold",
            backgroundColor: "#fff",
            p: "20px",
          }}
        >
          {category.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
