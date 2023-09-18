import React from 'react'
import { FaSearch } from "react-icons/fa";
import {Input, Button, Box, Heading, Flex, Spacer } from "@chakra-ui/react";const SearchBar = () => {
  return (
    <Box display={"flex"} margin={"20px 20%"}>
          <Input
            htmlSize={100}
            width="auto"
            placeholder={`Search Holiday by Destination`}
          />
          <Button>
            <FaSearch className="search-icon" />
          </Button>
        </Box>
  )
}

export default SearchBar