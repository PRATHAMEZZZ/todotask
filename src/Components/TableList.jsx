import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StarIcon from "@mui/icons-material/Star";
import { Box, Checkbox, Divider, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import getCurrentDate from "../utils/currentDate";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../Redux/slices/weatherSlice";

export default function TableList({
  render,
  setRender,
  pendingRow,
  completeRow,
  setPendingRow,
  setCompleteRow,
  menus,
}) {
  const dispatch = useDispatch();

  const setPendingTask = () => {
    const getStoredPendingTask =
      JSON.parse(localStorage.getItem("pendingtasks")) || [];
    let filteredTasksByMenus;

    switch (menus) {
      case "Today":
        filteredTasksByMenus = getStoredPendingTask.filter(
          (ele) => ele.date === getCurrentDate()
        );
        break;
      case "Important":
        filteredTasksByMenus = getStoredPendingTask.filter(
          (ele) => ele.priority == true
        );

        break;
      default:
        filteredTasksByMenus = getStoredPendingTask;
    }

    setPendingRow(filteredTasksByMenus);
  };

  const setCompleteTask = () => {
    const getStoredCompleteTask =
      JSON.parse(localStorage.getItem("completetasks")) || [];
    let filteredTasksByMenus;

    switch (menus) {
      case "Today":
        filteredTasksByMenus = getStoredCompleteTask.filter(
          (ele) => ele.date === getCurrentDate()
        );
        break;
      case "Important":
        filteredTasksByMenus = getStoredCompleteTask.filter(
          (ele) => ele.priority == true
        );

        break;
      default:
        filteredTasksByMenus = getStoredCompleteTask;
    }

    setCompleteRow(filteredTasksByMenus);
  };

  const onHandleCheck = (e, task, index) => {
    if (e.target.checked) {
      //add to complete task
      const addCompleteTask = JSON.stringify([task, ...completeRow]);
      localStorage.setItem("completetasks", addCompleteTask);

      //remove from pending task
      pendingRow.splice(index, 1);
      const addPendingTask = JSON.stringify([...pendingRow]);
      localStorage.setItem("pendingtasks", addPendingTask);
    } else {
      //add to pending task
      const addPendingTask = JSON.stringify([task, ...pendingRow]);
      localStorage.setItem("pendingtasks", addPendingTask);

      //remove from complete task
      completeRow.splice(index, 1);
      const addCompleteTask = JSON.stringify([...completeRow]);
      localStorage.setItem("completetasks", addCompleteTask);
    }
    setRender(!render);
  };

  const onHandlePriority = (task, index) => {
    const getStoredPendingTask =
      JSON.parse(localStorage.getItem("pendingtasks")) || [];
    const important = getStoredPendingTask.map((ele, ind) => {
      if (ind === index) {
        return {
          ...ele,
          priority: !task.priority,
        };
      } else {
        return ele;
      }
    });
    localStorage.setItem("pendingtasks", JSON.stringify(important));
    setRender(!render);
  };

  const onHandleDelete = (index, type) => {
    if (type === "pending") {
      const updatedPendingTasks = pendingRow.filter(
        (ele, ind) => index !== ind
      );
      localStorage.setItem("pendingtasks", JSON.stringify(updatedPendingTasks));
    } else {
      const updatedCompleteTasks = completeRow.filter(
        (ele, ind) => index !== ind
      );
      localStorage.setItem(
        "completetasks",
        JSON.stringify(updatedCompleteTasks)
      );
    }
    setRender(!render);
  };

  React.useEffect(() => {
    setPendingTask();
  }, [render, menus]);

  React.useEffect(() => {
    setCompleteTask();
  }, [render, menus]);

  React.useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <>
      {/* pending */}
      <Divider />
      <Typography sx={{ textAlign: "left", fontWeight: 600, my: 3, mx: 2 }}>
        Pending
      </Typography>
      <Divider />
      <TableContainer
        component={Paper}
        sx={{ height: 280, overflowY: "scroll" }}
      >
        {pendingRow.length === 0 ? (
          <Box sx={{ p: 10 }}>
            <Typography sx={{ fontWeight: "800" }}>NO PENDING TASKS</Typography>
          </Box>
        ) : (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {pendingRow.map((ele, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">
                    <Checkbox
                      onChange={(e) => onHandleCheck(e, ele, index)}
                      checked={false}
                      sx={{ height: "10px" }}
                    />
                    {ele?.task}{" "}
                  </TableCell>
                  <TableCell align="right">
                    <StarIcon
                      sx={{
                        cursor: "pointer",
                        "&:hover": {
                          color: "#9c27af",
                        },
                      }}
                      color={ele.priority ? "secondary" : "inherit"}
                      onClick={() => onHandlePriority(ele, index)}
                    />
                    <DeleteForeverIcon
                      sx={{
                        cursor: "pointer",
                        ml: 2,
                        color: "inherit",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                      onClick={() => onHandleDelete(index, "pending")}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <Divider />

      {/* completed */}
      <Typography sx={{ textAlign: "left", fontWeight: 600, my: 3, mx: 2 }}>
        Completed
      </Typography>
      <Divider />
      <TableContainer
        component={Paper}
        sx={{ height: 280, overflowY: "scroll" }}
      >
        {completeRow.length === 0 ? (
          <Box sx={{ p: 10 }}>
            <Typography sx={{ fontWeight: "800" }}>
              NO COMPLETED TASKS
            </Typography>
          </Box>
        ) : (
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              {completeRow.map((ele, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    align="left"
                    sx={{ textDecoration: "line-through" }}
                  >
                    <Checkbox
                      onChange={(e) => onHandleCheck(e, ele, index)}
                      checked={true}
                      sx={{ height: "10px" }}
                    />
                    {ele.task}{" "}
                  </TableCell>
                  <TableCell align="right">
                    <StarIcon
                      sx={{ cursor: "pointer" }}
                      color={ele.priority ? "secondary" : "inherit"}
                    />
                    <DeleteForeverIcon
                      sx={{
                        cursor: "pointer",
                        ml: 2,
                        color: "inherit",
                        "&:hover": {
                          color: "red",
                        },
                      }}
                      onClick={() => onHandleDelete(index, "complete")}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </>
  );
}
