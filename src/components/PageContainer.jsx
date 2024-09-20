import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const PageContainer = ({ children }) => {
    return <Container maxWidth="lg">{children}</Container>;
};

export default PageContainer;
