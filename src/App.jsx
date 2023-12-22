import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, Route, Routes } from 'react-router-dom'
import PageLayout from './Layout/PageLayout/PageLayout'
import { auth } from './firebase/firebase'
import AuthPage from './pages/AuthPage/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'

function App() {
  // set the initial state where user: null in useAuthStore.js file
  const [authUser] = useAuthState(auth)

  return (
    <PageLayout>
      <Routes>
        {/* if user is not authenticated, navigate back to /auth page */}
        {/* same goes to Authentication page and profile page */}
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/auth"
          element={!authUser ? <AuthPage /> : <Navigate to="/" />}
        />
        {/* no protection cuz people still can see the others' profile */}
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
