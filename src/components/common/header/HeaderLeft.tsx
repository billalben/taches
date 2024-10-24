import ButtonWithDropdown from "@/components/ButtonWithDropdown";
import { Fab } from "@mui/material";
import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";

const HeaderLeft = () => {
  return (
    <div className="left">
      <h2 className="title">Tâches</h2>
      <Fab
        size="medium"
        aria-label="add"
        variant="circular"
        sx={{
          padding: "2px",
          borderRadius: "8px",
          backgroundColor: "#f5f5f5",
          boxShadow: 0,
          "&:hover": {
            backgroundColor: "#26A4DA29",
            boxShadow: 2,
          },
        }}
      >
        <CropFreeOutlinedIcon sx={{ color: "#26A4DA" }} />
      </Fab>

      <ButtonWithDropdown />
    </div>
  );
};

export default HeaderLeft;
