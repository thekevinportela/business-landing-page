import { Box, Text, Textarea, Button } from "@chakra-ui/react";
import React from "react";

const ContactCard = ({ title, children }) => {
  return (
    <Box display={"flex"} flexDir={"column"} w={"70%"}>
      {title && (
        <Text
          alignSelf={"flex-start"}
          fontSize={{ base: 24, md: 36 }}
          color={"#6D6875"}
        >
          {title}
        </Text>
      )}
      <form style={{ display: "flex", flexDirection: "column" }}>
        <Textarea
          h={300}
          borderRadius={"xl"}
          padding={{ base: 5, md: 10 }}
          shadow={"md"}
          bg={"white"}
          mb={6}
          outline={"#FFCDB2"}
          _active={"#FFCDB2"}
          focusBorderColor={"#FFCDB2"}
        />
        <Button
          justifySelf={"center"}
          alignSelf={"center"}
          shadow={"md"}
          color={"#6D6875"}
          bg="#FFCDB2"
          size={"lg"}
        >
          submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactCard;
