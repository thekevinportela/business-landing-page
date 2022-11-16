import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";
import HeaderCard from "../components/HeaderCard";
import Squiggle from "../icons/Squiggle";
import SquiggleSmall from "../icons/SquiggleSmall";

const Services = () => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      // h={"100vh"}
      w={"100vw"}
      bg={"#ffdecc"}
      className="services"
      // pt={250}
      py={"10rem"}
      // overflow={"hidden"}
    >
      <HeaderCard title={"service/product #1"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        viverra.
        <br />
        <br />
        $50
      </HeaderCard>
      <HeaderCard title={"service/product #2"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        viverra.
        <br />
        <br />
        $150
      </HeaderCard>
      <HeaderCard title={"service/product #3"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        viverra.
        <br />
        <br />
        $200
      </HeaderCard>
      <HeaderCard title={"service/product #4"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        viverra.
        <br />
        <br />
        $250
      </HeaderCard>
      {/* <Squiggle /> */}
      <SquiggleSmall />
    </Box>
  );
};

export default Services;
