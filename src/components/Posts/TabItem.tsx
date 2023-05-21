import { Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";

type TabItem = {
  title: string;
  icon: typeof Icon.arguments;
};

type TabItemProps = {
  item: TabItem;
  selected: boolean;
  setSelectedTab: (value: string) => void;
};

const TabItem: React.FC<TabItemProps> = ({
  item,
  selected,
  setSelectedTab,
}) => {
  return (
    <Flex
      justify="center"
      align="center"
      flexGrow={1}
      p="14px 0px"
      cursor="pointer"
      _hover={{ bg: "gray.100" }}
      color={selected ? "blue.400" : "gray.400"}
      borderWidth={selected ? "0px 1px 3px 0px" : "0px 1px 1px 0px"}
      borderBottomColor={selected ? "blue.400" : "gray.200"}
      fontWeight={selected ? "600" : "400"}
      borderRightColor="gray.300"
      onClick={() => setSelectedTab(item.title)}
    >
      <Flex align="center" height="20px" mr={2}>
        <Icon as={item.icon} />
      </Flex>
      <Text fontSize="10pt">{item.title}</Text>
    </Flex>
  );
};
export default TabItem;
