import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
        setTodos(newTodos);
    };

    const renderTodos = () => {
        return todos.map((todo, index) => {
            return (
                <li key={index} onClick={() => toggleTodo(index)} style={{ textDecoration: todo.completed ? 'line-through' : 'none', background: todo.completed ? 'green' : 'red' }}>
                    {todo.text}
                </li>
            );
        });
    };

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={event => {
                event.preventDefault();
                const newTodo = { text: event.target.todo.value, completed: false };
                addTodo(newTodo);
                event.target.todo.value = '';
            }}>
                <input type="text" name="todo" />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {renderTodos()}
            </ul>
        </div>
    );
}

export default TodoList;
