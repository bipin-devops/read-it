import { Flex } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: any;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify="center" p="14px 0px">
      <Flex width="95%" justify="center" maxWidth="860px">
        {/* Left */}
        <Flex
          direction="column"
          width={{ base: "100%", md: "70%", lg: "85%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>

        {/* Right */}
        <Flex
          direction="column"
          display={{ base: "none", md: "flex" }}
          width={{ base: "100%", md: "30%", lg: "15%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children && children[1 as keyof typeof children]}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default PageContent;
