import {
  Avatar,
  Box,
  Button,
  Link as ChakraLink,
  Flex,
  Tooltip,
} from '@chakra-ui/react'
import { AiFillHome } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { Link as RouterLink } from 'react-router-dom'
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from '../../assets/constants'
import useLogout from '../../hooks/useLogout'

const Sidebar = () => {
  const sideBarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create',
    },
    {
      icon: <Avatar size={'sm'} name="Burak Ormek" src="./profilepic.png" />,
      text: 'Profile',
      link: '/asaprogrammer',
    },
  ]
  const { handleLogout, isLoggingOut, error } = useLogout()

  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      position={'sticky'}
      top={0}
      left={0}
      px={{ base: '2px', md: '4px' }}
    >
      <Flex direction={'column'} gap={10} w={'full'} height={'full'}>
        <ChakraLink
          as={RouterLink}
          to={'/'}
          pl={2}
          display={{ base: 'none', md: 'block' }}
          cursor="pointer"
        >
          <InstagramLogo />
        </ChakraLink>
        <ChakraLink
          as={RouterLink}
          to={'/'}
          p={2}
          display={{ base: 'block', md: 'none' }}
          cursor="pointer"
          w={{ base: '10', md: 'full' }}
          borderRadius={6}
          _hover={{
            bg: 'whiteAlpha.400',
          }}
        >
          <InstagramMobileLogo />
        </ChakraLink>

        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sideBarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={4}
              openDelay={500}
              display={{ base: 'block', md: 'none' }}
            >
              <ChakraLink
                display={'flex'}
                to={item.link || null}
                as={RouterLink}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={{ base: '10', md: 'full' }}
                justifyContent={{ base: 'center', md: 'flex-start' }}
              >
                {item.icon}
                <Box display={{ base: 'none', md: 'block' }}>{item.text}</Box>
              </ChakraLink>
            </Tooltip>
          ))}
        </Flex>
        {/* LOG OUT */}
        <Tooltip
          hasArrow
          label={'Logout'}
          placement="right"
          ml={4}
          openDelay={500}
          display={{ base: 'block', md: 'none' }}
        >
          <Flex
            // display={'flex'}
            // to={'/auth'}
            // as={RouterLink}
            onClick={handleLogout}
            alignItems={'center'}
            gap={4}
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius={6}
            p={2}
            mt={'auto'}
            w={{ base: '10', md: 'full' }}
            justifyContent={{ base: 'center', md: 'flex-start' }}
          >
            <BiLogOut size={25} />
            <Button display={{ base: 'none', md: 'block' }}>Log out</Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  )
}

export default Sidebar
