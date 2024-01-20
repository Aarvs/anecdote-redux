import Filter from './components/AnecdoteFilter'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <AnecdoteList/>
      <h2>create new</h2>
      <NewAnecdote/>
    </div>
  )
}

export default App