import { Container, Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import AdminLogin from "../components/AdminLogin";
import HomeSub from "../components/HomeSub";
import Request from "../components/Request";
import Tracker from "../components/Tracker";
import AboutUs from "../components/AboutUs";
import Header from "../utils/Header";

const Home = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="h-screen w-full overflow-y-hidden">
      <Header />
      <div className="sm:pt-20 md:pt-32">
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              bgcolor: "rgb(123 , 190 , 252)",
              height: { xs: "4rem", sm: "4rem" },
              display: "flex",
              fontWeight: { xs: 5, sm: 10 },
              justifyContent: "center",
            }}
          >
            <TabList
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={true}
              aria-label="scrollable force tabs example"
            >
              <Tab
                label="Home"
                value="1"
                sx={{
                  color: value === "1" ? "rgb(123 , 190 , 252)" : "white",
                  bgcolor: value === "1" && "white",
                  borderRadius: "10rem",
                  marginY: 1,
                }}
              />
              <Tab
                label="Request"
                value="2"
                sx={{
                  color: value === "2" ? "rgb(123 , 190 , 252)" : "white",
                  bgcolor: value === "2" && "white",
                  borderRadius: "10rem",
                  marginY: 1,
                }}
              />
              <Tab
                label="Tracker"
                value="3"
                sx={{
                  color: value === "3" ? "rgb(123 , 190 , 252)" : "white",
                  bgcolor: value === "3" && "white",
                  borderRadius: "10rem",
                  marginY: 1,
                }}
              />

              <Tab
                label="About us"
                value="4"
                sx={{
                  color: value === "4" ? "rgb(123 , 190 , 252)" : "white",
                  bgcolor: value === "4" && "white",
                  borderRadius: "10rem",
                  marginY: 1,
                }}
              />
              <Tab
                label="Admin"
                value="5"
                sx={{
                  color: value === "5" ? "rgb(123 , 190 , 252)" : "white",
                  bgcolor: value === "5" && "white",
                  borderRadius: "10rem",
                  marginY: 1,
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1">
            <HomeSub setValue={setValue} />
          </TabPanel>
          <TabPanel value="2">
            <Request />
          </TabPanel>
          <TabPanel value="3">
            <Tracker />
          </TabPanel>

          <TabPanel value="4">
            <AboutUs />
          </TabPanel>
          <TabPanel value="5">
            <AdminLogin />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};

export default Home;
