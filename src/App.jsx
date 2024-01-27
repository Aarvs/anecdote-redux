import { useEffect } from 'react'
import Filter from './components/AnecdoteFilter'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    anecdoteService.getAll().then((anecdotes) => dispatch(setAnecdotes(anecdotes)))
  },[])

  return (
    <div style={{overflow:"hidden"}}> 
      <h2>Anecdotes With Redux Tookit</h2>
      <Notification/>
      <Filter/>
      <AnecdoteList/>
      <h2>create new</h2>
      <NewAnecdote/>
    </div>
  )
}

export default App