import { useState } from "react";
import { Fab } from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import DropdownMenu from "./DropdownMenu";
import { menuItemsData } from "@/data";

const ButtonWithDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Fab
        size="medium"
        aria-label="add"
        variant="circular"
        onClick={handleClick}
        sx={{
          padding: "2px",
          borderRadius: "8px",
          backgroundColor: "#f5f5f5",
          boxShadow: 0,
          position: "relative",
          "&:hover": {
            backgroundColor: "#26A4DA29",
            boxShadow: 2,
          },
        }}
      >
        <AddTwoToneIcon sx={{ color: "#26A4DA" }} />
      </Fab>

      {/* Dropdown menu component */}
      <DropdownMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={Boolean(anchorEl)}
        menuItems={menuItemsData}
      />
    </>
  );
};

export default ButtonWithDropdown;
