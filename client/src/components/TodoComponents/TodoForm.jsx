import React from 'react'
import TodoService from '../../services/TodoService';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


const TodoForm = ({ setInputTodoText, todos, setTodos, inputTodoText }) => {

    const inputTodoTextHandler = (e) => {
        console.log(e.target.value);
        setInputTodoText(e.target.value);
    };

    const submitHandler = (e) => {
        console.log("submitted task : " + inputTodoText);

   /*     axios.put('http://localhost:8081/todos/add', {
            task : inputTodoText
        }).then((res) => console.log(res.data));
     */   
        TodoService.addTodo(inputTodoText).then((res) => {
            console.log(res.data);
            setTodos([
                ...todos, {
                    task: res.data.task,
                    completed: res.data.completed,
                    id: res.data.id
                }
            ]);
        });
        
        setInputTodoText("");
        e.preventDefault();
    }

    return (
        <form>
                <Form.Control className="todoInput" type="text" placeholder="Todo"
                 value={inputTodoText} onChange={inputTodoTextHandler} /> {' '}
                <Button variant="primary" onClick={submitHandler} size="sm">Submit</Button>
        </form>
    );
}

export default TodoForm;