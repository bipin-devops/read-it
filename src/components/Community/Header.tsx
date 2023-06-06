import { Community } from "@/atoms/communitiesAtom";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillDribbbleCircle } from "react-icons/ai";
import useCommunityData from "@/hooks/useCommunityData";

type HeaderProps = {
  communityData: Community;
};

const Header: React.FC<HeaderProps> = ({ communityData }) => {
  const { communityStateValue, onJoinOrLeaveCommunity, loading } =
    useCommunityData();
  const isJoined = !!communityStateValue.mySnippets.find(
    (item) => item.communityId === communityData.id
  );
  return (
    <Flex direction="column" width="100%" height="145px">
      <Box height="50%" bg="blue.300" />
      <Flex justify="center" bg="white" flexGrow={1}>
        <Flex width="95%" maxWidth="860px">
          {communityStateValue.currentCommunity?.imageURL ? (
            <Image
              src={communityStateValue.currentCommunity.imageURL}
              borderRadius="full"
              boxSize="66px"
              alt="Community Avatar"
              position="relative"
              top={-3}
              color="blue.500"
              border="4px solid white"
            />
          ) : (
            <Icon
              as={AiFillDribbbleCircle}
              fontSize={64}
              position="relative"
              top={-4}
              color="brand.100"
              border="4px solid white"
              borderRadius="50%"
            />
          )}
          <Flex padding="14px 8px">
            <Flex direction="column" mr={6}>
              <Text fontWeight={500} fontSize="18pt">
                {communityData.id}
              </Text>
              <Text fontWeight={500} fontSize="8pt" color="gray.300">
                /{communityData.privacyType}
              </Text>
            </Flex>
            <Button
              variant={isJoined ? "outline" : "solid"}
              height="30px"
              mt={1}
              pr={5}
              pl={6}
              isLoading={loading}
              onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
            >
              {isJoined ? "joined" : "join"}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
