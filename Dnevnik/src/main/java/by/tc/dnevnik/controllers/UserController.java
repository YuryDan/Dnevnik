package by.tc.dnevnik.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import by.tc.dnevnik.models.User;
import by.tc.dnevnik.repositories.UserRepository;

@RestController
@RequestMapping("/dnevnik")
public class UserController {

	@Autowired
	UserRepository repository;

	@RequestMapping("/getAllTeachers")
	public Iterable<User> getAllTeachers() {
		return repository.findAll();
	}
	
	@RequestMapping("/godMod")
	@PreAuthorize("hasRole('ADMIN')")
	public String godMod() {
		return "successful";
	}
	
	@RequestMapping("/getAllUsers")
	@PreAuthorize("hasRole('ADMIN')")
	public Iterable<User> getAllUsers() {
		return repository.findAll();
	}
}
