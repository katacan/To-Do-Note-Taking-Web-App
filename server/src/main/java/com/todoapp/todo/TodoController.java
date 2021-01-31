package com.todoapp.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class TodoController {

	@Autowired
	private TodoRepository todoRepository;
	
	@PostMapping("/todos/add")
	public Todo addTodo(@RequestBody Todo todo) {
		return todoRepository.save(todo);
	}
	
	@GetMapping("/todos/all")
	public Iterable<Todo> getAllTodos() {
		return todoRepository.findAll();
	}
	
	@GetMapping("/todos/{id}")
	public Todo getTodo(@PathVariable(value ="id") Integer id) {
		return todoRepository.findById(id).get();
	}
	
	@DeleteMapping("/todos/{id}") 
	public void delete(@PathVariable(value ="id") Integer id) {
		todoRepository.deleteById(id);
	}
	
	@PostMapping("/todo/{id}")
	public void setCompletedById(@PathVariable(value ="id") Integer id, @RequestBody boolean isCompleted) {
		Todo todo = todoRepository.findById(id).get();
		todo.setCompleted(isCompleted);
	}
	
}
