import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Router } from "./routes/Router";
import Home from "./pages/HomePage";

function App() {
  return (
    <div>
      <ChakraProvider resetCSS>
        <Router>
          <Home />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
