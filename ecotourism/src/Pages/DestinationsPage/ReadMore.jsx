import { Box, Text, Button, Collapse, useDisclosure } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';


export default function ReadMore({ text, maxChars }) {
    const { isOpen, onToggle } = useDisclosure();
  
    // Show the "Read More" button if the text length exceeds maxChars
    const shouldShowButton = text.length > maxChars;
  
    return (
      <Box>
        <Text>
          {isOpen ? text : `${text.slice(0, maxChars)}...`}
          {shouldShowButton && (
            <Button
              variant="link"
              size="sm"
              onClick={onToggle}
              ml={2}
              rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            >
              {isOpen ? 'Read Less' : 'Read More'}
            </Button>
          )}
        </Text>
      </Box>
    );
  }
  