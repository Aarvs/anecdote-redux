import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducers/anecdoteReducer';
import filterReducer from './reducers/filterReducer'

export default configureStore({
  reducer: {
    anecdote: reducer,
    filter: filterReducer
  },
})