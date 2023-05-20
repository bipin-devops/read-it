import { Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { BsArrowUpRightCircle, BsChatDots } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import {
  IoFilterCircleOutline,
  IoNotificationsCircleOutline,
  IoVideocamOutline,
} from "react-icons/io5";

const Icons: React.FC = () => {
  return (
    <Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        align="center"
        borderRight="1px solid"
        borderColor="gray.300"
      >
        <Flex
          mr={1}
          ml={1}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.300" }}
        >
          <Icon as={BsArrowUpRightCircle} fontSize={20} />
        </Flex>
        <Flex
          mr={1}
          ml={1}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.300" }}
        >
          <Icon as={IoFilterCircleOutline} fontSize={22} />
        </Flex>
        <Flex
          mr={1}
          ml={1}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.300" }}
        >
          <Icon as={IoVideocamOutline} fontSize={22} />
        </Flex>
      </Flex>
      <>
        <Flex
          mr={1}
          ml={1}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.300" }}
        >
          <Icon as={BsChatDots} fontSize={20} />
        </Flex>
        <Flex
          mr={1}
          ml={1}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.300" }}
        >
          <Icon as={IoNotificationsCircleOutline} fontSize={20} />
        </Flex>
        <Flex
          display={{ base: "none", md: "flex" }}
          mr={1}
          ml={1}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.300" }}
        >
          <Icon as={GrAdd} fontSize={20} />
        </Flex>
      </>
    </Flex>
  );
};
export default Icons;
