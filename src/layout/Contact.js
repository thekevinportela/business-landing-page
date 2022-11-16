import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";
import ContactCard from "../components/ContactCard";
import HeaderCard from "../components/HeaderCard";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      // h={"100vh"}
      w={"100vw"}
      bg={"#ffdecc"}
      className="contact"
      py={"10rem"}
      overflow={"hidden"}
    >
      <HeaderCard title={"contact us"}>
        <HStack mb={4}>
          <MdEmail />
          <Text>by email at cecily@gmail.com</Text>
        </HStack>

        <HStack>
          <MdPhone />
          <Text>by phone at (305)555-5555</Text>
        </HStack>
      </HeaderCard>
      <Text mt={4} mb={6} fontSize={{ base: 18, md: 30 }} color={"#6D6875"}>
        or
      </Text>

      <ContactCard title={"message us here"} />
    </Box>
  );
};

export default Contact;
