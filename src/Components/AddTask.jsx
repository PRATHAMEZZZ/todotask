import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import "./AddTask.css";
import AddTaskModal from "./AddTaskModal";

const AddTask = ({ render, setRender }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box className={"addtask"}>
        <Typography variant="h6">Add A Task</Typography>
        <Button variant="outlined" onClick={() => setOpen(true)}>
          Add Task
        </Button>
      </Box>
      {open && (
        <AddTaskModal
          open={open}
          setOpen={setOpen}
          setRender={setRender}
          render={render}
        />
      )}
    </>
  );
};

export default AddTask;
