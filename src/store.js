import { configureStore } from '@reduxjs/toolkit'
import BlogDetails from './slice/BlogDetails'

export default configureStore({
  reducer: {
    blogInformation: BlogDetails
  },
})