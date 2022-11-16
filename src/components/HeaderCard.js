import { Box, Text } from "@chakra-ui/react";
import React from "react";

const HeaderCard = ({ title, children }) => {
  return (
    <Box zIndex={1} w={"70%"}>
      {title && (
        <Text
          alignSelf={"flex-start"}
          fontSize={{ base: 24, md: 36 }}
          color={"#6D6875"}
        >
          {title}
        </Text>
      )}

      <Box
        borderRadius={"xl"}
        padding={{ base: 5, md: 10 }}
        shadow={"md"}
        bg={"#FFCDB2"}
        mb={{ base: 6, md: 20 }}
      >
        <Text fontSize={{ base: 14, md: 20 }}>{children}</Text>
      </Box>
    </Box>
  );
};

export default HeaderCard;
