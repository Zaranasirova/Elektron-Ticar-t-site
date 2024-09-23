import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

const Loading = () => {
  const { loading } = useSelector((state) => state.products.product);
  
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={loading}
  
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
