import ListItem from "./ListItem";
import { Box } from "@mui/material";

function List({ toDos, deleteItems, completedItems }) {
  return (
    <Box className="list">
      {toDos.map((item) => (
        <ListItem
          key={item.id}
          toDoName={item}
          id={item.id}
          deleteItems={deleteItems}
          completedItems={completedItems}
        />
      ))}
    </Box>
  );
}

export default List;
