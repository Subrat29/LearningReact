import React, { useState } from 'react'
import { addTodo } from '../features/todoSlice'
import { useDispatch } from 'react-redux'

function TodoForm() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(text))
        setText('')
    }

    return (
        <form
            className="flex"
            onSubmit={onSubmitHandler}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;