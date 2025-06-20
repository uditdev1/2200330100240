import React, { useState } from "react";
import RegisterPage from "./pages/RegisterPage";
import StockPage from "./pages/StockPage";
import RelationPage from "./pages/RelationPage";
import { createTheme, ThemeProvider, Container } from "@mui/material";

export default function App() {
  const [token, setToken] = useState(null);
  const theme = createTheme();

  // if (!token) return <ThemeProvider theme={theme}><RegisterPage onAuthorized={setToken} /></ThemeProvider

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StockPage token={token} />
        <RelationPage token={token} />
      </Container>
    </ThemeProvider>
  );
}
