import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/Sidebar";
import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 2, marginLeft: "60px" }}>
        <Header />
        <Typography variant="h6">Main Content</Typography>
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
