import { Button } from "@mui/material";

function SharedButton({ name, onClick, variant = "contained", ...props }) {
  return (
    <>
      <Button
        className="shared-button"
        onClick={onClick}
        variant={variant}
        sx={{
          ...props.sx,
        }}
      >
        {name}
      </Button>
    </>
  );
}

export default SharedButton;
