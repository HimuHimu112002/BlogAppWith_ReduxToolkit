import { createSlice } from '@reduxjs/toolkit'

export const BlogDetails = createSlice({
  name: 'blog',
  initialState: {
    blogInfo: localStorage.getItem("blogInfo") ? JSON.parse(localStorage.getItem("blogInfo")):null,
    
  },
  reducers: {
    blogInformation: (state, action) => {
      state.blogInfo = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { blogInformation } = BlogDetails.actions

export default BlogDetails.reducer
