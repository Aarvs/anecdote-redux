import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:[],
  reducers:{
    addVote: (state, action) =>{
      const updateAnecdote = action.payload
      return state.map(anecdote => anecdote.id !== updateAnecdote.id ? anecdote: updateAnecdote)
    },

    createAnecdote(state, action){

      if(!action.payload){
        return state
      }
      // return [...state, newAnecdote]

      return state.concat(action.payload)
    },

    setAnecdotes(state, action){
      return action.payload
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const appendAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
  }
}

export const vote = anecdote => {
  return async dispatch => {
    const updateAnecdote = await anecdoteService.voting(anecdote)
    dispatch(addVote(updateAnecdote))
  }
}

export const {addVote, setAnecdotes, createAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer