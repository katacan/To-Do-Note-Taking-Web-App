package com.todoapp;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.todoapp.note.Note;
import com.todoapp.note.NoteRepository;
import com.todoapp.todo.Todo;
import com.todoapp.todo.TodoRepository;

@SpringBootApplication
public class TodoAppApplication {

	private static final Logger log = LoggerFactory.getLogger(TodoAppApplication.class);
	
	public static void main(String[] args) {
		SpringApplication.run(TodoAppApplication.class, args);
	}
	
	@Bean
	  public CommandLineRunner todoLineRunner(TodoRepository repository) {
	    return (args) -> {
	      // save a few customers
	      // fetch all customers
	      log.info("Todo found with findAll():");
	      log.info("-------------------------------");
	      for (Todo todo : repository.findAll()) {
	        log.info(todo.toString());
	        log.info(todo.getTask());
	      }
	      log.info("");
	      log.info("-------------------------------");
	      
	    };
	  }
	
	@Bean
	  public CommandLineRunner noteLineRunner(NoteRepository repository) {
	    return (args) -> {
	      // save a few customers
	      // fetch all customers
	      log.info("Notes found with findAll():");
	      log.info("-------------------------------");
	      for (Note note : repository.findAll()) {
	        log.info(note.toString());
	        log.info(note.getContent());
	      }
	      log.info("");
	      
	    };
	  }

}
