import {

  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
} from '@chakra-ui/react'
import { CartItem } from './CartItem'
import { CartOrderSummary } from './CartOrderSummary'
import { cartData } from './_data'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Checkout = () => {
  const [price, setPrice] = useState(616516);
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/")
  }
  const handlePrice = (val) => {
    setPrice(val);
    console.log(val);
  }
  return (<Box
    maxW={{
      base: '3xl',
      lg: '7xl',
    }}
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
    <Stack
      direction={{
        base: 'column',
        lg: 'row',
      }}
      align={{
        lg: 'flex-start',
      }}
      spacing={{
        base: '8',
        md: '16',
      }}
    >
      <Stack
        spacing={{
          base: '8',
          md: '10',
        }}
        flex="2"
      >
        <Heading fontSize="2xl" fontWeight="extrabold">
          Checkout !
        </Heading>

        <Stack spacing="6">
          {cartData.map((item) => (
            <CartItem key={item.id} {...item} handlePrice={handlePrice} />
          ))}
        </Stack>
      </Stack>

      <Flex direction="column" align="center" flex="1">
        <CartOrderSummary price={price} />
        <HStack mt="6" fontWeight="semibold">
          <p>or</p>
          <Link ><button onClick={handleClick}>Continue shopping</button></Link>
        </HStack>
      </Flex>
    </Stack>
  </Box>)
}
export default Checkout