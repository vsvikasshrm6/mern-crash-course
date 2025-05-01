import { Box, Button, useColorModeValue } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Box maxH={"100vh"} bg = {useColorModeValue("gray.100", "whiteAlpha.100")}>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/createPage" element={<CreatePage />}></Route>
      </Routes>
    </Box>
  );
}
export default App;
