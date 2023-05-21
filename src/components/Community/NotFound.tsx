import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const CommunityNotFound: React.FC = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
    >
      Sorry, The community does not exist or has been banned.
      <Link href="/">
        <Button mt={4}>Back to Home</Button>
      </Link>
    </Flex>
  );
};
export default CommunityNotFound;
