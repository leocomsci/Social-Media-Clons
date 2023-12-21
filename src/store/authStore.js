import { create } from 'zustand'

// we use zustand to intialize the state of the app where it has 3 state
// firstly, there's noone acces to user = null, when user logs in, it sets state user
// when logout, it sets back to beginning, which user is no one.

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem('user-info')),
  login: (user) => set({ user }),
  logout: () => set({ user: null }),
  setUser: (user) => set({ user }),
}))

export default useAuthStore
