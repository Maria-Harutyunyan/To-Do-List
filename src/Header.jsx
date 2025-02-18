import { TextField, Box } from "@mui/material";
import SharedButton from "./exercises/SharedButton";
import { useState } from "react";

function Header({ click, setSearch }) {
  const [input, setInput] = useState("");

  return (
    <>
      <Box className="header-container">
        <Box className="task-container">
          <TextField
            className="add-task"
            label="Add a task"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SharedButton
            id="add"
            onClick={() => {
              click(input);
              setInput("");
            }}
            name="Add"
            variant="contained"
            color="secondary"
          />
        </Box>
        <Box id="search-container">
          <TextField
            id="search"
            label="search"
            variant="outlined"
            placeholder="Search tasks"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
      </Box>
    </>
  );
}

export default Header;
