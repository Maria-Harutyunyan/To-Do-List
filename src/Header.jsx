import { TextField, Box } from "@mui/material";
import SharedButton from "./exercises/SharedButton";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

function Header({ inputValue, setInput, click, handleSearch }) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Box className="header-container">
        <Box className="task-container">
          <TextField
            className="add-task"
            label="Add a task"
            variant="outlined"
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
          />
          <SharedButton
            id="add"
            onClick={click}
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
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Box>
      </Box>
    </>
  );
}

export default Header;
