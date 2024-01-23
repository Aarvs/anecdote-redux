import Filter from './components/AnecdoteFilter'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {

  return (
    <div style={{overflow:"hidden"}}> 
      <h2>Anecdotes With Redux Tookit</h2>
      <Filter/>
      <AnecdoteList/>
      <h2>create new</h2>
      <NewAnecdote/>
    </div>
  )
}

export default App