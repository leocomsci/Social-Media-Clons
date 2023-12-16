import { Avatar, Link as ChakraLink, Flex, Text } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const SuggestedHeader = () => {
  return (
    <Flex
      w={'full'}
      justifyContent={'space-between'} // help didive flex into 2 with the space between
      alignItems={'center'}
    >
      <Flex alignItems={'center'} gap={2}>
        <Avatar src="./img1.png" alt="user profile pic" size={'sm'} />
        <Text fontSize={12} fontWeight={'bold'} gap={2}>
          asaprogrammer
        </Text>
      </Flex>
      <ChakraLink
        as={RouterLink}
        to={'/auth'}
        fontSize={14}
        fontWeight={'medium'}
        color={'blue.400'}
        cursor="pointer"
        style={{ textDecoration: 'none' }}
        _hover={{ color: 'white' }}
      >
        Logout
      </ChakraLink>
    </Flex>
  )
}

export default SuggestedHeader
