import {
  Box,
  Container,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Check } from "@mui/icons-material";

function CourseFeaturesBox({ course }) {
  return (
    <Box bgcolor="#fff" minHeight="450px" pt={6}>
      <Container>
        <Paper
          sx={{
            position: "relative",
            maxHeight: "100%",
            padding: "20px",
            borderRadius: "0",
            width: { xs: "100%", md: "calc(100% - 370px)" },
            border: "1px solid #ddd",
            boxShadow: "unset",
            mb: { xs: "30px", md: "auto" },
          }}
        >
          <Typography variant="h6" fontWeight="bold" fontSize="28px">
            What you&apos;ll learn
          </Typography>
          <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
            <List sx={{ fontSize: "14px" }}>
              {course.learn.map((info, i) => (
                <ListItem key={i}>
                  <Check sx={{ mr: 1.3, fontSize: "16px" }} /> {info}
                </ListItem>
              ))}
            </List>
            <List sx={{ fontSize: "14px" }}>
              {course.learn.map((info, i) => (
                <ListItem key={i}>
                  <Check sx={{ mr: 1.3, fontSize: "16px" }} /> {info}
                </ListItem>
              ))}
            </List>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}

export default CourseFeaturesBox;
