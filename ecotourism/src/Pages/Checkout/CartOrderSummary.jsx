import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { PriceTag, formatPrice } from './PriceTag'
import { useNavigate } from 'react-router-dom'

const OrderSummaryItem = (props) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')} >
        {label}
      </Text>
      {value ? <PriceTag price={value} currency="INR" /> : children}
    </Flex>
  )
}

export const CartOrderSummary = ({ price }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/orderSummary");
  }
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={price} />
        <OrderSummaryItem label="Tax (including 18% GST)">
          {/* <Link href="#" textDecor="underline">
            Calculate shipping
          </Link> */}
          <Text>{price*18/100}</Text>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline">
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
          <PriceTag price={price+price*18/100} currency="INR" />
          </Text>
        </Flex>
      </Stack>
      <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />} onClick={handleClick}>
        Checkout

      </Button>
    </Stack>
  )
}
