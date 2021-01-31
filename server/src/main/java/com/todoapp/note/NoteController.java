package com.todoapp.note;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class NoteController {
	
	@Autowired
	private NoteRepository noteRepository;

	@GetMapping("/notes/all")
	public Iterable<Note> getNotes() {
		return noteRepository.findAll();
	}
	
	@GetMapping("/notes/{id}")
	public Note getNodeById(@PathVariable(value = "id") long id) {
		return noteRepository.findById(id).get();
	}
	
	@PostMapping("/notes/add")
	public Note addNote(@RequestBody Note note) {
		return noteRepository.save(note);
	}
	
	@PostMapping("/notes/{id}")
	public void updateContentById(@PathVariable(value = "id") long id, @RequestBody String newContent) {
		Note note = noteRepository.findById(id).get();
		note.setContent(newContent);
	}
	
	@DeleteMapping("/notes/{id}")
	public void deleteById(@PathVariable(value = "id") long id) {
		noteRepository.deleteById(id);
	}
	
	
	
	
	
}
