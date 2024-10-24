import {
  Avatar,
  Button,
  Card,
  Fab,
  IconButton,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import logoutIcon from "@/assets/icons/logout.svg";

type TProps = {
  handleFilter: () => void;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  anchorEl: HTMLElement | null;
  open: boolean;
};

const HeaderRight = ({
  handleFilter,
  handleClick,
  handleClose,
  anchorEl,
  open,
}: TProps) => {
  return (
    <div className="right">
      <div className="search">
        <TextField id="outlined-basic" label="recherche" variant="outlined" />
      </div>
      <div className="icon">
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
          <FilterAltOutlinedIcon
            onClick={handleFilter}
            sx={{ color: "#26A4DA" }}
          />
        </Fab>
      </div>

      <div>
        <IconButton onClick={handleClick}>
          <Avatar sx={{ bgcolor: "#26A4DA" }}>A</Avatar>
        </IconButton>
        <Popover
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
          sx={{
            borderRadius: "12px",
          }}
        >
          <Card
            sx={{
              padding: "1rem",
              width: "fit-content",
              borderRadius: "12px",
            }}
          >
            <div className="user-meta">
              <div className="name">Nom de l'utilisateur</div>
              <div className="role">Site 02</div>
            </div>
            {/* <p>Modifier votre profile</p> */}
            <Typography
              variant="body2"
              sx={{
                color: "#1F1F1F",
                marginBlock: "1rem",
                fontSize: "0.75rem",
                textAlign: "center",
              }}
            >
              Modifier votre profile
            </Typography>
            <Button
              variant="outlined"
              onClick={() => console.log("Déconnecter")}
              sx={{
                borderColor: "#D9D9D9",
                borderRadius: "8px",
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: "0.75rem", color: "#1F1F1F" }}
              >
                Déconnecter
              </Typography>
              <img
                src={logoutIcon}
                alt="logout"
                style={{
                  marginLeft: "0.5rem",
                }}
              />
            </Button>
          </Card>
        </Popover>
      </div>
    </div>
  );
};

export default HeaderRight;
