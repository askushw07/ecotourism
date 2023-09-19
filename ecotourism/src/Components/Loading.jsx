import { Skeleton, Stack } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <div>
      <Stack>
        <Skeleton height="10px" />
        <Skeleton height="15px" />
        <Skeleton height="20px" />
        <br />
        <br />
        <Stack>
          <Skeleton height="5px" />
          <Skeleton height="20px" />
          <Skeleton height="50px" />
        </Stack>
      </Stack>
    </div>
  );
};

export default Loading;
