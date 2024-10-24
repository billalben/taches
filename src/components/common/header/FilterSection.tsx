import { Autocomplete, Box, Button, Stack, TextField } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

type TaskOptions = { label: string } | null | undefined;

type TProps = {
  taskType: TaskOptions;
  setTaskType: React.Dispatch<React.SetStateAction<TaskOptions>>;
  taskStatus: TaskOptions;
  setTaskStatus: React.Dispatch<React.SetStateAction<TaskOptions>>;
  selectedUser: TaskOptions;
  setSelectedUser: React.Dispatch<React.SetStateAction<TaskOptions>>;
  taskPriority: TaskOptions;
  setTaskPriority: React.Dispatch<React.SetStateAction<TaskOptions>>;
  handleResetFilters: () => void;
  getFiltersValues: () => void;
  tasksType: { label: string }[];
  tasksStatus: { label: string }[];
  utilisateur: { label: string }[];
  tasksPriority: { label: string }[];
};

const FilterSection = ({
  taskType,
  setTaskType,
  taskStatus,
  setTaskStatus,
  selectedUser,
  setSelectedUser,
  taskPriority,
  setTaskPriority,
  handleResetFilters,
  getFiltersValues,
  tasksType,
  tasksStatus,
  utilisateur,
  tasksPriority,
}: TProps) => {
  return (
    <Stack
      direction="row"
      sx={{ flexWrap: "wrap", gap: 2, padding: "1rem 2rem" }}
    >
      <Autocomplete
        disablePortal
        options={tasksType}
        value={taskType}
        onChange={(_, newValue) => {
          setTaskType(newValue);
        }}
        sx={{ width: 200 }}
        renderInput={(params) => (
          <TextField {...params} label="Type de tâches" variant="outlined" />
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
          startIcon={<CloseIcon />}
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
          startIcon={<FilterAltOutlinedIcon />}
        >
          Filter
        </Button>
      </Box>
    </Stack>
  );
};

export default FilterSection;
