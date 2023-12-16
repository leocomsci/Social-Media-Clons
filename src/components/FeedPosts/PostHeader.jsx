import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex
      w={'full'}
      justifyContent={'space-between'} // help didive flex into 2 with the space between
      alignItems={'center'}
      my={2}
    >
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} alt="user profile pic" size={'sm'} />
        <Flex fontSize={12} fontWeight={'bold'} gap={2}>
          {username}
        </Flex>
        <Box color={'gray.500'} fontSize={12}>
          • 1w
        </Box>
      </Flex>
      <Box cursor={'pointer'}>
        <Text
          fontSize={12}
          color={'blue.500'}
          fontWeight={'bold'}
          _hover={{ color: 'white' }}
          transition={'0.2s ease-in-out'}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  )
}

export default PostHeader
