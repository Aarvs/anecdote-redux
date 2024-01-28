import { useDispatch, useSelector } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { setTimedNotification } from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const dispatch = useDispatch();
    const anecdotes = useSelector(state => state.anecdote)
    console.log(anecdotes)
    const filter = useSelector(state => state.filter)
    console.log(filter)

    
    const Anecdote = ({anecdote}) => {
        const handleClick = () => {
            // dispatch(addVote(anecdote.id))
            dispatch(vote(anecdote))
            dispatch(setTimedNotification(`you voted ${anecdote.content}`, 5))           
        }

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
              />
            )}  
        </ul>
    )
}

export default AnecdoteList

