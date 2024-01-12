import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editText, setEditText] = useState('');
    const [editingId, setEditingId] = useState(null);

    const handleEdit = (todo) => {
        setEditingId(todo.id);
        setEditText(todo.text);
    };

    const saveEdit = () => {
        dispatch(updateTodo({ id: editingId, text: editText }));
        setEditingId(null);
        setEditText('');
    };

    return (
        <>
            <div className='mt-9'>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        {editingId === todo.id ? (
                            <input
                                type="text"
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                            />
                        ) : (
                            <div className='text-white'>{todo.text}</div>
                        )}
                        <div>
                            {editingId === todo.id ? (
                                <button
                                    onClick={saveEdit}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                >
                                    Save
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={() => handleEdit(todo)}
                                        className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mx-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => dispatch(removeTodo(todo.id))}
                                        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                    >
                                        Remove
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
