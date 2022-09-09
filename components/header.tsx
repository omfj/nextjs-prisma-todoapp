import { Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Flex
      py="2"
      px={["2", null, null, "6"]}
      alignItems="center"
      bg="blue.800"
      mb="5"
    >
      <Heading>DO!</Heading>
      <Spacer />
      <Flex gap="5">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </Flex>
    </Flex>
  );
};

export default Header;
