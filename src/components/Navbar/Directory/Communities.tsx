import CreateCommunityModal from "@/components/Modal/CreateCommunity/CreateCommunityModal";
import { Flex, Icon, MenuItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { GrAdd } from "react-icons/gr";

type CommunitiesProps = {};

const Communities: React.FC<CommunitiesProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <CreateCommunityModal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
      />
      <MenuItem
        width="100%"
        fontSize="10pt"
        _hover={{ bg: "gray.200" }}
        onClick={() => setIsOpen(true)}
      >
        <Flex align="center">
          <Icon as={GrAdd} mr={2} fontSize={18} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Communities;
