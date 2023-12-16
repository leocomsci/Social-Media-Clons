import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import { useState } from 'react'

const SugguestedUser = ({ name, follower, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false)
  return (
    <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} name={name} size={'md'} />
        <VStack spacing={2} alignItems={'flex-start'}>
          <Box fontSize={12} fontWeight={'bold'}>
            {name}
          </Box>
          <Box fontSize={11} color={'gray.400'}>
            {follower} followers
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={14}
        bg={'transparent'}
        fontWeight={'medium'}
        p={0}
        h={'max-content'}
        cursor={'pointer'}
        color={'blue.500'}
        _hover={{
          color: 'white',
        }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {!isFollowed ? 'Follow' : 'Unfollow'}
      </Button>
    </Flex>
  )
}

export default SugguestedUser
