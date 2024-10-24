import {
  Alert,
  Autocomplete,
  Button,
  Checkbox,
  Pagination,
  TextField,
} from "@mui/material";

import Dialog from "./Dialog";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const tasksType = [{ label: "Drivers" }, { label: "Achat" }, { label: "Type" }];

const Test = () => {
  return (
    <div>
      <Button variant="contained" color="primary">
        Hello world
      </Button>
      <Button variant="contained">Hello world</Button>
      <TextField id="outlined-basic" label="recherche" variant="outlined" />
      <Pagination count={10} color="primary" />

      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>

      <div>
        <Autocomplete
          disablePortal
          options={tasksType}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="
          Type de tâches"
              variant="outlined"
            />
          )}
        />
      </div>


{// priority: high - medium - low
// etat: a faire - in progress - done
}

      <div>
        <Autocomplete
          disablePortal
          options={tasksType}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="
          Type de tâches"
              variant="outlined"
            />
          )}
        />
      </div>

      <div>
        <Alert
          severity="info"
          icon={false}
          sx={{ color: "#26A4DA", backgroundColor: "#26A4DA1A" }}
        >
          This is an info Alert.
        </Alert>
        <Alert
          severity="warning"
          icon={false}
          sx={{ color: "#DAC826", backgroundColor: "#DAC8261A" }}
        >
          This is a warning Alert.
        </Alert>
        <Alert
          severity="error"
          icon={false}
          sx={{ color: "#DA2626", backgroundColor: "#DA26261A" }}
        >
          This is an error Alert.
        </Alert>
      </div>

      <div>
        <Dialog />
      </div>
    </div>
  );
};

export default Test;
