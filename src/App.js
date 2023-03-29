import { Box, Center, VStack } from "@chakra-ui/react";
import About from "./layout/About";
import Contact from "./layout/Contact";
import Header from "./layout/Header";
import Services from "./layout/Services";

function App() {
  return (
    <Box overflow={"hidden"} bg={"#ffdecc"}>
      <Header />
      <VStack
        maxW={1000}
        mx="auto"
        // alignSelf="center"
        // flex
        // justifyContent="center"
        // alignItems={"center"}
      >
        <About />
        <Services />
        <Contact />
      </VStack>
    </Box>
  );
}

export default App;
