import { Box, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [selected, setSelected] = useState(0);

  const clicked = (n) => {
    setSelected(n);
  };

  const offset = useBreakpointValue({
    base: -0,
    md: 0,
  });

  const LINK_DATA = [
    {
      label: "home",
      to: "about",
      offset: offset,
      id: 1,
    },
    {
      label: "services",
      to: "services",
      offset: offset,
      id: 2,
    },
    {
      label: "contact",
      to: "contact",
      offset: offset,
      id: 3,
    },
  ];

  return (
    <HStack
      position={"fixed"}
      w={"full"}
      bg={"#6D6875"}
      zIndex={10}
      justifyContent={"center"}
    >
      <HStack
        justifyContent={{ base: "space-around", md: "space-between" }}
        w={"full"}
        maxW={1280}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Link
          to="ShowCase"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
          onClick={() => clicked(0)}
          style={{ cursor: "pointer" }}
        >
          <Text px={{ base: 0, md: 5 }} color={"#FFB4A2"} fontSize={60}>
            cecily's
          </Text>
        </Link>
        <HStack px={{ base: 0, md: 5 }}>
          {LINK_DATA.map((link) => (
            <RenderLink
              label={link.label}
              to={link.to}
              offset={link.offset}
              id={link.id}
              selected={selected}
              clicked={clicked}
            />
          ))}
        </HStack>
      </HStack>
    </HStack>
  );
};

export default Header;

const RenderLink = ({ label, to, offset, id, selected, clicked }) => {
  return (
    // <Box p={4}>
    <Box px={{ base: 2, md: 4 }} pb={{ base: 3, md: 0 }}>
      <Link
        to={to}
        spy={true}
        smooth={true}
        offset={offset}
        duration={600}
        onClick={() => clicked(id)}
        style={{
          cursor: "pointer",
        }}
      >
        <Text color={selected === id ? "#FFB4A2" : "white"} fontSize={18}>
          {label}
        </Text>
      </Link>
    </Box>
  );
};
