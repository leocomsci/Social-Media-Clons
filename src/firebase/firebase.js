import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAItmCASJRFg2Lm3m46YQ0GjlCwTJcfo-k',
  authDomain: 'insta-clone-30fa0.firebaseapp.com',
  projectId: 'insta-clone-30fa0',
  storageBucket: 'insta-clone-30fa0.appspot.com',
  messagingSenderId: '1092324106799',
  appId: '1:1092324106799:web:36de6918b1be392f449cda',
  measurementId: 'G-8N0CDNR8ST',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, auth, firestore, storage }
