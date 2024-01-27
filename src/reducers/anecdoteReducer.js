import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState:[],
  reducers:{
    addVote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      console.log(anecdoteToChange)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
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

export const {addVote, setAnecdotes, createAnecdote} = anecdoteSlice.actions
export default anecdoteSlice.reducer