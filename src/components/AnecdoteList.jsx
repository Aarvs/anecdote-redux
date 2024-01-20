import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const dispatch = useDispatch();
    const anecdotes = useSelector(state => state)

    // const vote = (id) => {
    //   console.log('vote', id)
    //   dispatch(addVote(id))
    // }

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

    const sortedAnecdotes = anecdotes.sort((a,b) => b.votes - a.votes)

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
