import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import TodoService from './services/TodoService';
import Home from './components/Home';
import NotePage from './components/NoteComponents/NotePage';
import { BrowserRouter as Router,
        Route,
        Switch } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  const[inputTodoText, setInputTodoText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    TodoService.getTodos().then((res) => {
      console.log("todo useEffect works");
      setTodos(res.data);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar></NavBar> 
          <Switch>
            <Route path="/todos">
              <TodoForm inputTodoText={inputTodoText} setInputTodoText={setInputTodoText} setTodos={setTodos} todos={todos}></TodoForm>
              <TodoList todos={todos} setTodos={setTodos}></TodoList>
            </Route>
            <Route path="/notes">
              <NotePage></NotePage>
            </Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </div>
      </Router>   
        
      
      
  );
}




export default App;
