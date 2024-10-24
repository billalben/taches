// DropdownMenu.jsx
import { Menu, MenuItem } from "@mui/material";

type TProps = {
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  open: boolean;
  menuItems: Array<{
    label: string;
    icon: string;
    onClick: () => void;
  }>;
};

const DropdownMenu = ({ anchorEl, handleClose, open, menuItems }: TProps) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          boxShadow: 1,
        },
      }}
    >
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          onClick={() => {
            item.onClick();
            handleClose();
          }}
          sx={{
            display: "flex",
            gap: "1rem",
            borderBottom:
              index < menuItems.length - 1 ? "1px solid #D9D9D9" : "none",
          }}
        >
          <img src={item.icon} alt={item.label} />
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DropdownMenu;
