import { Paper, Typography, Button } from "@mui/material";
import PropTypes from "prop-types";
import CoursesSwiper from "./CoursesSwiper";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Paper sx={{ padding: "24px" }}>{children}</Paper>}
    </div>
  );
}
TabPanel.prototype = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
function CoursesTabPanel({ tabs, value }) {
  return (
    <>
      {tabs.map((tab, i) => (
        <TabPanel key={i} value={value} index={i} style={{ px: "24px" }}>
          <Typography variant="h5" component="h5" fontWeight="bold" mb={1}>
            {tab.tabTitle}
          </Typography>
          <Typography
            variant="p"
            component="p"
            width="75%"
            fontWeight="600"
            mb={1}
          >
            {tab.tabDesc}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 1.5,
              mb: 3.5,
              textTransform: "capitalize",
              backgroundColor: "white",
              border: "1px solid #000",
              boxShadow: "none",
              color: "#000",
              borderRadius: "0",
              ":hover": {
                background: "none",
                boxShadow: "none",
                opacity: "0.8",
              },
            }}
          >
            Explore {tab.name}
          </Button>
          <CoursesSwiper tab={tab} />
        </TabPanel>
      ))}
    </>
  );
}

export default CoursesTabPanel;
