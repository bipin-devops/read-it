import { Button, Flex, Input, Stack, Textarea } from "@chakra-ui/react";
import React from "react";

type TextInputsProps = {};

const TextInputs: React.FC<TextInputsProps> = () => {
  return (
    <Stack spacing={3} width="100%">
      <Input
        name="title"
        //   value={}
        //   onChange={}
        fontSize="10pt"
        borderRadius={4}
        placeholder="Title"
        bg="gray.50"
        _placeholder={{ color: "gray.400" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid ",
          borderColor: "gray.500",
        }}
      />
      <Textarea
        name="body"
        //   value={}
        //   onChange={}
        fontSize="10pt"
        height="100px"
        borderRadius={4}
        bg="gray.50"
        placeholder="Body Text"
        _placeholder={{ color: "gray.400" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid ",
          borderColor: "gray.500",
        }}
      />
      <Flex justify="flex-end">
        <Button
          height="34px"
          padding="0px 30px"
          disabled={false}
          fontSize="16px"
          onClick={() => {}}
        >
          Post
        </Button>
      </Flex>
    </Stack>
  );
};
export default TextInputs;
