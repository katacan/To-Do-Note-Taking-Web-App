import React from 'react'
import TodoService from '../../services/TodoService';
import Button from 'react-bootstrap/Button'

const Todo = ({text, todos, todo, setTodos}) => {

    const deleteHandler = (e) => {
        setTodos(todos.filter((el) => el.id !== todo.id))
        TodoService.deleteTodoById(todo.id);
        e.preventDefault();
    }

    const completedHandler = (e) => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }
        ));
       TodoService.setCompletedById(todo.id, todo.task, !todo.completed);
       e.preventDefault();
    }

    return (
        <div>
            <li className={"todo-item" + (todo.completed ? " completed" : "")}>{text}</li>
            <Button variant="success" onClick={completedHandler} size="sm">Completed</Button>{' '}
            <Button variant="danger" onClick={deleteHandler} size="sm">Delete</Button>{' '}
            
        </div>
      
    );
};

export default Todo;