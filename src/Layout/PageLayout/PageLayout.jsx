import { Box, Flex } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/Sidebar'
import { auth } from '../../firebase/firebase'

const PageLayout = ({ children }) => {
  const { pathname } = useLocation()
  {
    /* before adding useAuthState, we didnt put login to check if user is logging in, therefore there's still
       for the app the render the sidebar before it check if the user is not authenticad
      
      Therefore, we have to add function to check if the user is authenticatd before 
      rendering the sidebar in pagelayout*/
  }

  const [user, loading, error] = useAuthState(auth)

  const canRenderSidebar = pathname !== '/auth' && user
  return (
    <Flex>
      {/* sidebar on the left */}

      {canRenderSidebar ? (
        <Box w={{ base: '70px', md: '240px' }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* sidebar on the right */}
      <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageLayout
