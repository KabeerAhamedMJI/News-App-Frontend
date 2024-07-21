import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../app/feature/login/loginSlice'
import commentReducer from '../app/feature/comment/commentSlice'


export default configureStore({
  reducer: {
    login: loginReducer,
    comment: commentReducer
  },
})