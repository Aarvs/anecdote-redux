import { useDispatch } from "react-redux";
import { appendAnecdote } from "../reducers/anecdoteReducer";
import { setNotification, removeNotification } from "../reducers/notificationReducer";

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        dispatch(appendAnecdote(content))
        dispatch(setNotification(`You created ${content}`))
        setTimeout(() => {
          dispatch(removeNotification())
          event.target.anecdote.value = ''
        }, 5000);
    }

    return(
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    )
}

export default NewAnecdote