import { useDispatch } from "react-redux";
import { appendAnecdote } from "../reducers/anecdoteReducer";
import { setTimedNotification } from "../reducers/notificationReducer";

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(appendAnecdote(content))
        dispatch(setTimedNotification(`You created ${content}`, 5))
    }

    return(
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    )
}

export default NewAnecdote