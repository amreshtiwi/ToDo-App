import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addTodo, updateSearchTerm } from '../redux/actions';
import { BsSearch } from "react-icons/bs";
import FilterButton from './FilterButton';
import TodoList from './TodoList';

export default function Todo() {
    const dispatch = useDispatch()
    const [newTodoText, setTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleAdding = (text) => {
        dispatch(addTodo(text))
    }

    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") {
            handleAdding(newTodoText.trim());
            setTodoText("");
        }
    }

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchTerm(value))
    }

    return (
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO</h2>

            <div className='flex items-center mb-4'>
                <input value={newTodoText} onChange={(e) => setTodoText(e.target.value)} type="text" name='text' id='addTodoInput' placeholder='Add Todo'
                    className='flex-grow p-2 border-gray-300 focus:outline-none focus:border-blue-500' />

                <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
                    onClick={handleAddTodo}
                ><FaPlus /></button>
            </div>


            <div className='flex items-center justify-between '>
                <FilterButton/>
                
                <div className='flex items-center mb-4'>
                    <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text" name='text' id='searchTodoInput' placeholder='Search'
                        className='flex-grow p-2 border-gray-300 focus:outline-none focus:border-blue-500' />

                    <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none'
                       
                    ><BsSearch /></button>
                </div>
            </div>

            <TodoList/> 
        </div>
    )
}
