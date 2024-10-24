import { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";

import LogoIcon from "@/assets/icons/logo.svg";
import Logo2Icon from "@/assets/icons/logo2.svg";

import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
// import HistoryIcon from "@/assets/icons/history.svg?react";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const sidebarItems = [
  { text: "Taches", icon: <CheckBoxOutlinedIcon />, path: "/" },
  { text: "Historique", icon: <HistoryIcon />, path: "/history" },
  {
    text: "Notifications",
    icon: <NotificationsNoneOutlinedIcon />,
    path: "/notifications",
  },
];

const setting = {
  text: "Parametres",
  icon: <SettingsIcon />,
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();

  console.log(pathname);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          width: isOpen ? 240 : 60,
          height: "100vh",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: isOpen ? 240 : 60,
            transition: "width 0.3s",
            overflowX: "hidden",
            boxShadow: 2,
          },
          borderLeft: "1px solid rgba(0, 0, 0, 1)",
          padding: "0.5rem",
          position: "absolute",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: isOpen ? "nowrap" : "wrap",
            gap: 1,
            p: 1,
            width: isOpen ? 240 : 60,
            marginTop: "12px",
          }}
        >
          {isOpen ? (
            <img src={Logo2Icon} alt="" />
          ) : (
            <img src={LogoIcon} alt="" width={28} height={28} />
          )}
          <IconButton onClick={handleToggleSidebar} size="small">
            <MenuIcon />
          </IconButton>
        </Box>

        <Divider />

        <List sx={{ flexGrow: "1", marginTop: "82px" }}>
          {/* Sidebar items */}
          {sidebarItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.path}
              sx={{
                borderRadius: "32px",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#26A4DA14",
                },
                backgroundColor:
                  pathname === item.path ? "#26A4DA14" : "transparent",
                gap: "0.75rem",
                height: "58px",
                marginBottom: "8px",
              }}
            >
              <ListItemIcon
                sx={{
                  width: "24px",
                  minWidth: "24px",
                  color: pathname === item.path ? "#26A4DA" : "#000", // Set the SVG fill color based on active state
                  "& svg": {
                    fill: pathname === item.path ? "#26A4DA" : "#000", // Apply color to inline SVGs
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              {isOpen && (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ fontSize: "14px" }}
                    sx={{
                      color: pathname === item.path ? "#26A4DA" : "#595959",
                    }}
                  />
                  <ListItemText
                    primary="100+"
                    primaryTypographyProps={{ fontSize: "14px" }}
                    sx={{
                      color: pathname === item.path ? "#26A4DA" : "#595959",
                      textAlign: "right",
                    }}
                  />
                </Box>
              )}
            </ListItem>
          ))}
        </List>

        <List sx={{ marginTop: "auto" }}>
          {
            <ListItem
              component={Link}
              to="/settings"
              sx={{
                borderRadius: "32px",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#26A4DA14",
                },
                backgroundColor:
                  pathname === "/settings" ? "#26A4DA14" : "transparent",
                gap: "0.75rem",
              }}
            >
              <ListItemIcon
                sx={{
                  width: "24px",
                  minWidth: "24px",
                  "& svg": {
                    fill: pathname === "/settings" ? "#26A4DA" : "#595959",
                  },
                }}
              >
                {setting.icon}
              </ListItemIcon>
              {isOpen && (
                <ListItemText
                  primary={setting.text}
                  primaryTypographyProps={{ fontSize: "14px" }}
                  sx={{
                    color: pathname === "/settings" ? "#26A4DA" : "#595959",
                    fontSize: "16px",
                  }}
                />
              )}
            </ListItem>
          }
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
