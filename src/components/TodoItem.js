import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete , deleteTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };
    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }));
    };

    return (
        <li key={id} className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
                <label className='d-flex align-items-center'>
                    <input
                        type='checkbox'
                        className='mr-3'
                        onChange={handleCheckboxClick}
                        checked={completed}
                    ></input>
                    {title}
                </label>
                <button onClick={handleDeleteClick} className='btn btn-danger'>Sil</button>
            </div>
        </li>
    );
};

export default TodoItem;