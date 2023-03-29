import {
  Box,
  Icon,
  Image,
  Text,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";
import HeaderCard from "../components/HeaderCard";
import ArrowDown from "../icons/ArrowDown";
import Circle from "../icons/Circle";
import TopDots from "../icons/TopDots";
import WCircle from "../icons/WCircle";

const About = () => {
  const [shortPhone] = useMediaQuery("(max-height: 800px)");
  const [isWeb] = useMediaQuery("(min-width: 62em)");

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      w="full"
      justifyContent={"center"}
      alignItems={"center"}
      // h={"100vh"}
      // w={"100vw"}
      className="about"
      pt={{ base: shortPhone ? "20rem" : "13rem", md: "17rem", xl: "14rem" }}
      pb={{ base: "6rem", md: "10rem" }}
      overflow={"hidden"}
    >
      {/* <TopDots /> */}
      {/* <div data-aos="flip-left"> */}
      <HeaderCard title={"about us"}>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu
        vulputate lorem, scelerisque condimentum nulla. Etiam id iaculis ante.
        In hac habitasse platea dictumst. Ut elementum, dui et gravida luctus,
        lacus ligula ultrices metus, in rutrum augue nunc bibendum lacus.
        Suspendisse potenti. Nam consequat nisl id condimentum convallis.
        Curabitur nec convallis turpis. Nunc vel dolor turpis. Aenean eget
        varius lacus. Vivamus lacinia metus vel odio auctor, a eleifend sapien
        lacinia. Maecenas sed porta orci.
      </HeaderCard>
      {isWeb ? <WCircle /> : <Circle />}

      {/* </div> */}
    </Box>
  );
};

export default About;
