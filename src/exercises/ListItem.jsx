import { Box, Typography } from "@mui/material";
import SharedButton from "./SharedButton";

function ListItem({ toDoName, deleteItems, completedItems }) {
  return (
    <Box>
      <Typography
        className="list-item"
        sx={{
          textDecoration: toDoName.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
        onClick={() => completedItems(toDoName.id)}
      >
        {toDoName.value}
      </Typography>

      <SharedButton onClick={() => deleteItems(toDoName.id)} name="X" />
    </Box>
  );
}

export default ListItem;
