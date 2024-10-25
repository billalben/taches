import Card from "@/components/common/Card";
import { dataTasks } from "@/data";
import { Box, Grid, Pagination } from "@mui/material";

const Tasks = () => {
  return (
    <>
      <Grid container spacing={3} justifyContent={"center"} marginTop={4}>
        {dataTasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Card task={task} />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" marginBlock={4}>
        <Pagination count={10} color="primary" />
      </Box>
    </>
  );
};

export default Tasks;
