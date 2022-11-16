import { Box } from "@chakra-ui/react";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Header from "./layout/Header";
import Services from "./layout/Services";

function App() {
  return (
    <Box overflow={"hidden"}>
      <Header />
      <About />
      <Services />
      <Contact />
    </Box>
  );
}

export default App;
