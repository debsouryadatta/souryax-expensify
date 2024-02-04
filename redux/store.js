import { configureStore } from '@reduxjs/toolkit'
import user from './slices/user'

export const store = configureStore({
// Add the reducers/slices
  reducer: {
    user
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})