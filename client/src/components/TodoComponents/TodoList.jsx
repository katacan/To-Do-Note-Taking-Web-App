import React from 'react'
import Todo from './Todo'
import ListGroup from 'react-bootstrap/ListGroup'

const TodoList = ({ todos, setTodos }) => {

    return (
        <ul className="todoList">
        <ListGroup as="ul">
            {todos.map((todo) =>
                <Todo key={todo.id} text={todo.task} todo={todo} todos={todos} setTodos={setTodos}></Todo>
            )}
        </ListGroup>
            
        </ul>
    );

};

export default TodoList;