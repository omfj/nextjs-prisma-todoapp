import { IconButton, useColorMode } from "@chakra-ui/react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle color mode"
      icon={colorMode === "light" ? <BsMoonStarsFill /> : <BsSun />}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeButton;
