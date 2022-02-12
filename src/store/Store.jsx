import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './../reducer/Reducer'

export default configureStore({
  reducer: {
      api:apiSlice
  },
})