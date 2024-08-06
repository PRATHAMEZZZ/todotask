import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/slices/authSlice";
import getWeatherEmoji from "../utils/weatherEmojis";
import { Box, Typography } from "@mui/material";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const weather = useSelector((state) => state.weather.data);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ textAlign: "center", m: 2 }}>
        <Typography variant="h6">
          {getWeatherEmoji(weather?.current_weather?.weathercode)}
        </Typography>
      </Box>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{user?.name[0]}</Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        onClick={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem onClick={() => handleLogOut()}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
