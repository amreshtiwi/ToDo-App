import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

export default function TodoList() {

    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchesFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" &&
            !todo.completed) || (filter === "ALL");

            const matchesSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchesFilter && matchesSearch
        })
    } )

    console.log('filteredTodos', filteredTodos);

  return (
    <ul>
        <li className='my-2 text-sm italic'>All Your Note here ...</li>
        {
            filteredTodos.map((todo, index) => {
                return <TodoItem key={index} todo={todo} index={index}/>
            })
        }
    </ul>
  )
}
