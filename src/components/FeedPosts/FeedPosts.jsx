import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import FeedPost from './FeedPost'

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  return (
    <Container maxW={'container.sm'} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((idx) => (
          <VStack key={idx} gap={4} alignItems={'flex-start'} mb={10}>
            <Flex gap={2}>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={'flex-start'}>
                <Skeleton height={'10px'} w={'200px'} />
                <Skeleton height={'10px'} w={'200px'} />
              </VStack>
            </Flex>
            <Skeleton w={'full'}>
              <Box h={'500px'}>content wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost img="/img1.png" username="leoscomsci" avatar="./img1.png" />
          <FeedPost img="/img2.png" username="meow" avatar="./img2.png" />
          <FeedPost img="/img3.png" username="jacandleo" avatar="./img3.png" />
          <FeedPost img="/img4.png" username="jac.ramesa" avatar="./img4.png" />
        </>
      )}
    </Container>
  )
}

export default FeedPosts
