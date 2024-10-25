import Header from "@/components/common/header/Header";
import Sidebar from "@/components/common/Sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 2, marginLeft: "60px" }}>
        <Header />
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
