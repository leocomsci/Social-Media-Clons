import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import SuggestedHeader from './SuggestedHeader'
import SugguestedUser from './SuggestedUser'

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>
        <Text fontSize={12} fontWeight={'bold'} color={'gray.400'}>
          Suggest for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={'bold'}
          _hover={{ color: 'gray.400' }}
          cursor={'pointer'}
        >
          See All
        </Text>
      </Flex>
      <SugguestedUser
        name="Leo Luong"
        follower={1000}
        avatar="https://bit.ly/dan-abramov"
      />
      <SugguestedUser
        name="Jacinta Luong"
        follower={100000}
        avatar="https://bit.ly/dan-abramov"
      />
      <SugguestedUser
        name="Luan Luong"
        follower={132120}
        avatar="https://bit.ly/dan-abramov"
      />

      <Box fontSize={12} color={'gray.400'} alignSelf={'start'}>
        © 2023 Built By{' '}
        <Link
          href="https://www.facebook.com/leocompsci/"
          target="_blank"
          color="blue.500"
          fontSize={14}
        >
          Leocompsci{' '}
        </Link>
      </Box>
    </VStack>
  )
}

export default SuggestedUsers
