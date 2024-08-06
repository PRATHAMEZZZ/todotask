import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import getCurrentDate from "../utils/currentDate";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen, setRender, render }) {
  const [task, setTask] = React.useState({
    date: getCurrentDate(),
    task: "",
    status: "pending",
    priority: false,
  });

  const handleTask = () => {
    const storedTask = JSON.parse(localStorage.getItem("pendingtasks")) || [];
    const addTask = JSON.stringify([task, ...storedTask]);
    localStorage.setItem("pendingtasks", addTask);
    setRender(!render);
  };

  const handleDateChange = (newValue) => {
    if (newValue) {
      setTask((prev) => ({
        ...prev,
        date: dayjs(newValue).format("YYYY-MM-DD"),
      }));
    }
  };

  const handleInput = (e) => {
    setTask((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add A Task"}</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={dayjs(task.date)}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} />}
              minDate={dayjs()}
            />
          </LocalizationProvider>

          <TextField
            multiline
            rows={3}
            variant="outlined"
            label="Your Task"
            sx={{ width: "100%", height: "100px" }}
            name="task"
            value={task.task}
            onChange={handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" variant="contained">
            Close
          </Button>
          <Button
            onClick={() => {
              if (task.task === "") return;
              handleTask();
              handleClose();
            }}
            variant="contained"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
