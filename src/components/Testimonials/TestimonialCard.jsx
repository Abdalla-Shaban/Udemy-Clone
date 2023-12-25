import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function TestimonialCard({ testimonial }) {
  return (
    <Card
      sx={{
        minWidth: "250px",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: "15px",
        }}
      >
        <Typography
          sx={{ fontSize: 14, rotate: "360deg" }}
          color="text.secondary"
        >
          <FormatQuoteIcon />
        </Typography>
        <Typography
          variant="span"
          component="div"
          sx={{ mb: 1.5, fontWeight: "bold", flex: "1" }}
          color="text.secondary"
        >
          {testimonial.content}
        </Typography>
        <Stack direction="row" alignItems="center" gap="5px" fontWeight="bold">
          <Avatar>{testimonial.title.slice(0, 1)}</Avatar>
          {testimonial.title}
        </Stack>
      </CardContent>
      <Divider />
      <CardActions sx={{ mt: "auto" }}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default TestimonialCard;
