import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Alert, Box } from "@mui/material";
import { Task } from "@/types";

export default function CardComponent({ task }: { task: Task }) {
  // Helper function to render the Alert based on type, color, and message
  const renderAlert = (
    type: "info" | "warning" | "error",
    message: string,
    color: string
  ) => (
    <Alert
      severity={type}
      icon={false}
      sx={{
        color: color,
        backgroundColor: `${color}1A`, // Making the background a lighter shade
        padding: "4px 8px",
        "& .MuiAlert-message": { padding: 0 },
      }}
    >
      {message}
    </Alert>
  );

  // Alert for Status
  const statusAlert = () => {
    switch (task.status.label) {
      case "A faire":
        return renderAlert("info", "À faire", "#26A4DA");
      case "En cours":
        return renderAlert("warning", "En cours", "#DAC826");
      case "Terminé":
        return renderAlert("error", "Terminé", "#DA2626");
      default:
        return null;
    }
  };

  // Alert for Priority
  const priorityAlert = () => {
    switch (task.priority.label) {
      case "Haute":
        return renderAlert("error", "Haute", "#DA2626");
      case "Moyenne":
        return renderAlert("warning", "Moyenne", "#DAC826");
      case "Basse":
        return renderAlert("info", "Basse", "#26A4DA");
      default:
        return null;
    }
  };

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "auto" },
        height: "100%",
        boxShadow: 2,
        borderRadius: "12px",
        paddingInline: "8px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardHeader
        title={task.title}
        sx={{
          paddingBottom: "4px",
        }}
        titleTypographyProps={{
          sx: {
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
          },
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            marginBottom: 2,
          }}
        >
          {/* Render status and priority alerts */}
          {statusAlert()}
          {priorityAlert()}
        </Box>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {task.description}
        </Typography>
      </CardContent>

      {/* show avatar along by and in the end avatar of plus icon */}
      <CardActions disableSpacing>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
          }}
        >
          {task.collaborators.map((collaborator) => (
            <Avatar
              key={collaborator.initials}
              sx={{
                bgcolor: collaborator.color,
                marginRight: "-12px",
              }}
            >
              {collaborator.initials}
            </Avatar>
          ))}
          <Avatar
            sx={{
              bgcolor: "#26A4DA",
              marginRight: "-12px",
              "&:hover": { cursor: "pointer" },
            }}
          >
            +
          </Avatar>
        </Box>

        <IconButton aria-label="settings" sx={{ marginLeft: "auto" }}>
          <MoreVertIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
