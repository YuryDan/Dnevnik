package by.tc.dnevnik.controllers;

import org.springframework.beans.factory.annotation.Autowired;
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
}
