import {
  Flex,
  Heading,
  Spacer,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import ColorModeButton from "./color-mode-button";

const Header = () => {
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex
      py={["5", null, "8"]}
      px={["3", null, null, "10"]}
      alignItems="center"
      mb="10"
      transition="all 0.2s ease-in-out"
      borderBottom="1px solid"
      borderColor={borderColor}
      shadow="lg"
    >
      <Heading>Just DO it!</Heading>
      <Spacer />
      <Flex gap="5" alignItems="center">
        <Link href="/">
          <Button fontSize={["md", null, "lg"]}>Home</Button>
        </Link>

        <Link href="/about">
          <Button fontSize={["md", null, "lg"]}>About</Button>
        </Link>
        <ColorModeButton />
      </Flex>
    </Flex>
  );
};

export default Header;
