import { doc, setDoc } from 'firebase/firestore'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/firebase'
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth)

  const loginUser = useAuthStore((state) => state.login)

  const showToast = useShowToast()

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.username ||
      !inputs.fullname
    ) {
      showToast('Error', 'Please fill all the fields', 'error')
      return
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password,
      )
      if (!newUser && error) {
        showToast('Error', error.message, 'error')
        return
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullname: inputs.fullname,
          bio: '',
          profilePicURL: '',
          followers: [],
          following: [],
          post: [],
          createdAt: Date.now(),
        }
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc)
        localStorage.setItem('user-info', JSON.stringify(userDoc))
        loginUser(userDoc)
      }
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }

  return { loading, error, signup }
}

export default useSignUpWithEmailAndPassword
