import { useContext } from "react";
import ListItem from "./ListItem";
import { Box } from "@mui/material";
import { ThemeContext } from "styled-components";

function List({ toDos, deleteItems, completedItems }) {
  const theme = useContext(ThemeContext);
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
