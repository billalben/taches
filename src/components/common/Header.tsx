import { useState } from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  Fab,
  IconButton,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CropFreeOutlinedIcon from "@mui/icons-material/CropFreeOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import ButtonWithDropdown from "../ButtonWithDropdown";

import logoutIcon from "@/assets/icons/logout.svg";
import { tasksPriority, tasksStatus, tasksType, utilisateur } from "@/data";

type TaskOptions = { label: string} | null | undefined;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openFilter, setOpenFilter] = useState(false);

  // State for filter inputs
  const [taskType, setTaskType] = useState<TaskOptions>(null);
  const [taskStatus, setTaskStatus] = useState<TaskOptions>(null);
  const [selectedUser, setSelectedUser] = useState<TaskOptions>(null);
  const [taskPriority, setTaskPriority] = useState<TaskOptions>(null);

  // Function to reset all filters
  const handleResetFilters = () => {
    setTaskType(null);
    setTaskStatus(null);
    setSelectedUser(null);
    setTaskPriority(null);
  };

  // Function to handle filter section
  const getFiltersValues = () => {
    console.log("Filter clicked");
    console.log("taskType", taskType);
    console.log("taskStatus", taskStatus);
    console.log("selectedUser", selectedUser);
    console.log("taskPriority", taskPriority);
  };

  const handleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <header className="header">
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

        <div className="right">
          <div className="search">
            <TextField
              id="outlined-basic"
              label="recherche"
              variant="outlined"
            />
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
      </header>

      {/** filter section, it shows when i click <FilterAltOutlinedIcon /> */}
      {openFilter && (
        <Stack direction="row" sx={{ flexWrap: "wrap", gap: 2, padding: "1rem 2rem" }}>
          <Autocomplete
            disablePortal
            options={tasksType}
            value={taskType}
            onChange={(_, newValue) => {
              setTaskType(newValue);
            }}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Type de tâches"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            disablePortal
            options={tasksStatus}
            value={taskStatus}
            onChange={(_, newValue) => {
              setTaskStatus(newValue);
            }}
            sx={{ width: 160 }}
            renderInput={(params) => (
              <TextField {...params} label="Etat" variant="outlined" />
            )}
          />
          <Autocomplete
            disablePortal
            options={utilisateur}
            value={selectedUser}
            onChange={(_, newValue) => {
              setSelectedUser(newValue);
            }}
            sx={{ width: 160 }}
            renderInput={(params) => (
              <TextField {...params} label="Utilisateur" variant="outlined" />
            )}
          />
          <Autocomplete
            disablePortal
            options={tasksPriority}
            value={taskPriority}
            onChange={(_, newValue) => {
              setTaskPriority(newValue);
            }}
            sx={{ width: 160 }}
            renderInput={(params) => (
              <TextField {...params} label="Priorité" variant="outlined" />
            )}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginLeft: "auto",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "#D9D9D9",
                borderRadius: "500px",
                padding: "1rem 2rem",
                fontSize: "0.75rem",
              }}
              onClick={handleResetFilters}
            >
              réinitialiser
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "500px",
                padding: "1rem 2rem",
                fontSize: "0.75rem",
              }}
              onClick={getFiltersValues}
            >
              Filter
            </Button>
          </Box>
        </Stack>
      )}
    </>
  );
};

export default Header;
