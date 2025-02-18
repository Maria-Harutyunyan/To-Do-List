import { useState } from "react";
import Header from "./Header";
import List from "./exercises/List";
import { v4 as uuidv4 } from "uuid";
import FilterBtns from "./exercises/FilterBtns";
import "./App.css";
import React from "react";
import { Container, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteToDo, toggleComplete } from "./assets/redux/toDo";
import { setSearch, setButtonFilter } from "./assets/redux/filter";


function App() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.toDo.items || []);
  const search = useSelector((state) => state.filter.search);
  const filter = useSelector((state) => state.filter.buttonFilter);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  function click(inputValue) {
    if (inputValue) {
      dispatch(addToDo({ id: uuidv4(), value: inputValue, completed: false }));
    }
  }

  const filteredItems = items
    .filter((item) =>
      item.value.toLowerCase().includes((search || "").toLowerCase())
    )
    .filter((item) => {
      if (filter === "done") return item.completed;
      if (filter === "pending") return !item.completed;
      return true;
    });

  return (
    <Container id={theme}>
      <Typography id="header" variant="h2" align="center">
        To-Do App
      </Typography>
      <Switch checked={theme === "light"} onChange={toggleTheme} />

      <Header click={click} setSearch={(value) => dispatch(setSearch(value))} />
      <List
        toDos={filteredItems}
        deleteItems={(id) => dispatch(deleteToDo(id))}
        completedItems={(id) => dispatch(toggleComplete(id))}
      />
      <FilterBtns setFilter={(value) => dispatch(setButtonFilter(value))} />
    </Container>
  );
}

export default App;
