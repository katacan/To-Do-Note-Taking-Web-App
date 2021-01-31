import axios from 'axios';


const GET_TODOS_URL = "http://localhost:8081/todos/all";
const ADD_TODO_URL = 'http://localhost:8081/todos/add';
// Specific element  action URLs
// {id} is passed in the function as a parameter
const TODO_URL ='http://localhost:8081/todos/';

class TodoService {

    getTodos() {
        return axios.get(GET_TODOS_URL);
    }

    getTodoById(id) {
        return axios.get(TODO_URL + id);
    }

    addTodo(task) {
        return axios.post(ADD_TODO_URL, {
            task : task 
            });
    }

    deleteTodoById(id) {
        return axios.delete(TODO_URL + id);
    }

    setCompletedById(id, task, isCompleted) {
        return axios.post(ADD_TODO_URL, {
            id : id,
            task: task,
            completed: isCompleted
        });
    }

}

export default new TodoService();