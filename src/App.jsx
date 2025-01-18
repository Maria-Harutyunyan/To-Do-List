import { createContext, useState } from "react";
import Header from "./Header";
import List from "./exercises/List";
import { v4 as uuidv4 } from "uuid";
import FilterBtns from "./exercises/FilterBtns";
import "./App.css";
import React from "react";
import { Container, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";

const ThemeContext = createContext(null);

function App() {
  const [inputValue, setInput] = useState("");
  const [items, setItems] = useState([
    { id: uuidv4(), value: "Meet friends", completed: false },
    { id: uuidv4(), value: "To do shopping", completed: false },
    { id: uuidv4(), value: "Household chores", completed: false },
  ]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("light");

  function click(e) {
    setInput("");
    setItems((oldState) => [
      ...oldState,
      { id: uuidv4(), value: inputValue, completed: false },
    ]);
  }

  function deleteItems(id) {
    setItems((currentState) => currentState.filter((item) => item.id !== id));
  }

  function completedItems(id) {
    setItems(
      items.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  function handleSearch(value) {
    setSearch(value);
  }

  const filteredItems = items
    .filter((item) => item.value.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => {
      if (filter === "done") return item.completed;
      if (filter === "pending") return !item.completed;
      return true;
    });

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <Container id={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Typography id="header" variant="h2" align="center">
          To-Do App
        </Typography>
        <Switch cheked={theme === "light"} onChange={toggleTheme} />

        <Header
          inputValue={inputValue}
          setInput={setInput}
          setItems={setItems}
          click={click}
          handleSearch={handleSearch}
          name={name}
        />
        <List
          toDos={filteredItems}
          deleteItems={deleteItems}
          completedItems={completedItems}
        />
        <FilterBtns setFilter={setFilter} />
      </ThemeContext.Provider>
    </Container>
  );
}

export default App;
