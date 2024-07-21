import { createSlice } from '@reduxjs/toolkit';

export const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    comments: [], 
  },
  reducers: {
    addComment: (state, action) => {
      state.comments = [...action.payload]; 
    },
    addOneComment: (state, action) => {
      state.comments.push(action.payload); 
    },
  },
});

export const { addComment, addOneComment } = commentSlice.actions;
export default commentSlice.reducer;
