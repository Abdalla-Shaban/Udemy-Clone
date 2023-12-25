import { Tab, Tabs } from "@mui/material";

function CoursesTabs({ tabs, value, handleChange }) {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="Courses Tabs"
      sx={{
        "& .MuiTabs-indicator": {
          display: "none",
        },
        "& .MuiTabs-scrollButtons": {
          display: { xs: "flex", md: "none" },
        },
      }}
    >
      {tabs.map((tab, i) => (
        <Tab
          key={i}
          label={tab.name}
          id={`tab-${i}`}
          aria-controls={`tabpanel-${i}`}
          sx={{
            textTransform: "capitalize",
            "&.Mui-selected": {
              color: "#000",
            },
          }}
        />
      ))}
    </Tabs>
  );
}

export default CoursesTabs;
