import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          Weather
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
