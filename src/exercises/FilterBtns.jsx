import { Box } from "@mui/material";
import SharedButton from "./SharedButton";

function FilterBtns({ setFilter }) {
  return (
    <div className="filter-buttons">
      <Box>
        <SharedButton onClick={() => setFilter("all")} name="All" />
        <SharedButton
          onClick={() => {
            setFilter("done");
          }}
          name="Done"
        />
        <SharedButton
          onClick={() => {
            setFilter("pending");
          }}
          name="Pending "
        />
      </Box>
    </div>
  );
}

export default FilterBtns;
