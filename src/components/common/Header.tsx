import { Avatar, Card, Fab, TextField } from "@mui/material";

import Icon from "@/assets/icons/icon2.svg";
import PlusIcon from "@/assets/icons/plus.svg";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

const Header = () => {
  // box from two columns
  return (
    <header className="header">
      <div className="left">
        <h2 className="title">Tâches</h2>
        <div className="icon">
          <Fab
            size="small"
            aria-label="add"
            variant="extended"
            sx={{ padding: "4px" }}
          >
            <img src={Icon} alt="icon" width={18} height={18} />
          </Fab>
        </div>
        <div className="icon">
          <Fab
            size="small"
            aria-label="add"
            variant="extended"
            sx={{ padding: "4px" }}
          >
            <AddTwoToneIcon />
          </Fab>
        </div>
      </div>
      <div className="right">
        <div className="search">
          <TextField id="outlined-basic" label="recherche" variant="outlined" />
        </div>
        <div className="icon">
          <Fab
            size="small"
            aria-label="add"
            variant="extended"
            sx={{ padding: "4px" }}
          >
            <img src={PlusIcon} alt="icon" width={18} height={18} />
          </Fab>
        </div>
        <Card className="user-profile">
          <div className="user-meta">
            <div className="name">Nom de l'utilisateur</div>
            <div className="role">Site 02</div>
          </div>
          <div className="icon">
            <Avatar sx={{ bgcolor: "#26A4DA" }}>A</Avatar>
          </div>
        </Card>
      </div>
    </header>
  );
};

export default Header;
