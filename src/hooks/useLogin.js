import { doc, getDoc } from 'firebase/firestore'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase/firebase'
import useAuthStore from '../store/authStore'
import useShowToast from './useShowToast'

const useLogin = () => {
  const showToast = useShowToast()
  const loginUser = useAuthStore((state) => state.login)
  const [SignInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth)
  const logIn = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      showToast('Error', 'Please fill all the fields', 'error')
    }

    try {
      const userCred = SignInWithEmailAndPassword(inputs.email, inputs.password)

      if (userCred) {
        const docRef = doc(firestore, 'users', userCred.user.uid)
        const docSnap = await getDoc(docRef)
        localStorage.setItem('user-info', JSON.stringify(docSnap.data()))
        loginUser(docSnap.data())
      }
    } catch (error) {
      showToast('Error', error.message, 'error')
    }
  }
  return { loading, error, logIn }
}

export default useLogin
