import { useState } from "react";

import HeaderLeft from "./HeaderLeft";
import FilterSection from "./FilterSection";

import { tasksPriority, tasksStatus, tasksType, utilisateur } from "@/data";
import HeaderRight from "./HeaderRight";

type TaskOptions = { label: string } | null | undefined;

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
        <HeaderLeft />

        <HeaderRight
          handleFilter={handleFilter}
          handleClick={handleClick}
          handleClose={handleClose}
          anchorEl={anchorEl}
          open={open}
        />
      </header>

      {/** filter section, it shows when i click <FilterAltOutlinedIcon /> */}
      {openFilter && (
        <FilterSection
          taskType={taskType}
          taskStatus={taskStatus}
          selectedUser={selectedUser}
          taskPriority={taskPriority}
          setTaskType={setTaskType}
          setTaskStatus={setTaskStatus}
          setSelectedUser={setSelectedUser}
          setTaskPriority={setTaskPriority}
          handleResetFilters={handleResetFilters}
          getFiltersValues={getFiltersValues}
          tasksType={tasksType}
          tasksStatus={tasksStatus}
          utilisateur={utilisateur}
          tasksPriority={tasksPriority}
        />
        // <Stack
        //   direction="row"
        //   sx={{ flexWrap: "wrap", gap: 2, padding: "1rem 2rem" }}
        // >
        //   <Autocomplete
        //     disablePortal
        //     options={tasksType}
        //     value={taskType}
        //     onChange={(_, newValue) => {
        //       setTaskType(newValue);
        //     }}
        //     sx={{ width: 200 }}
        //     renderInput={(params) => (
        //       <TextField
        //         {...params}
        //         label="Type de tâches"
        //         variant="outlined"
        //       />
        //     )}
        //   />
        //   <Autocomplete
        //     disablePortal
        //     options={tasksStatus}
        //     value={taskStatus}
        //     onChange={(_, newValue) => {
        //       setTaskStatus(newValue);
        //     }}
        //     sx={{ width: 160 }}
        //     renderInput={(params) => (
        //       <TextField {...params} label="Etat" variant="outlined" />
        //     )}
        //   />
        //   <Autocomplete
        //     disablePortal
        //     options={utilisateur}
        //     value={selectedUser}
        //     onChange={(_, newValue) => {
        //       setSelectedUser(newValue);
        //     }}
        //     sx={{ width: 160 }}
        //     renderInput={(params) => (
        //       <TextField {...params} label="Utilisateur" variant="outlined" />
        //     )}
        //   />
        //   <Autocomplete
        //     disablePortal
        //     options={tasksPriority}
        //     value={taskPriority}
        //     onChange={(_, newValue) => {
        //       setTaskPriority(newValue);
        //     }}
        //     sx={{ width: 160 }}
        //     renderInput={(params) => (
        //       <TextField {...params} label="Priorité" variant="outlined" />
        //     )}
        //   />

        //   <Box
        //     sx={{
        //       display: "flex",
        //       alignItems: "center",
        //       gap: "0.5rem",
        //       marginLeft: "auto",
        //     }}
        //   >
        //     <Button
        //       variant="outlined"
        //       sx={{
        //         borderColor: "#D9D9D9",
        //         borderRadius: "500px",
        //         padding: "1rem 2rem",
        //         fontSize: "0.75rem",
        //       }}
        //       onClick={handleResetFilters}
        //       startIcon={<CloseIcon />}
        //     >
        //       réinitialiser
        //     </Button>
        //     <Button
        //       variant="contained"
        //       sx={{
        //         borderRadius: "500px",
        //         padding: "1rem 2rem",
        //         fontSize: "0.75rem",
        //       }}
        //       onClick={getFiltersValues}
        //       startIcon={<FilterAltOutlinedIcon />}
        //     >
        //       Filter
        //     </Button>
        //   </Box>
        // </Stack>
      )}
    </>
  );
};

export default Header;
