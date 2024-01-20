import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const dispatch = useDispatch();
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)
    
    const Anecdote = ({anecdote, handleClick}) => {
        return(
            <li>
                <div>
                    {anecdote.content}
                </div>
                <div>
                    has{anecdote.votes}
                    <button onClick={handleClick}>vote</button>
                </div>    
            </li>
        )
    }

    const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    const sortedAnecdotes = filteredAnecdotes.sort((a,b) => b.votes - a.votes)

    return(
        <ul>
            {sortedAnecdotes.map(anecdote => 
              <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={() => dispatch(addVote(anecdote.id))}
              />
            )}  
        </ul>
    )
}

export default AnecdoteList