import React from "react";
import SideBar from "../Sidebar/Sidebar";
import Content from "../component/content";
import { Box, TableRow, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
const Main = () => {
  return (
    <>
      <Box>
        <Box>
          <SideBar />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={red}
          marginTop={"400PX"}
          marginLeft={"600px"}
        >
          <Content />
        </Box>
      </Box>
    </>
  );
};

export default Main;
