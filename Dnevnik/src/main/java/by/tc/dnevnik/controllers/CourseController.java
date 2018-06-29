package by.tc.dnevnik.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import by.tc.dnevnik.models.Course;
import by.tc.dnevnik.repositories.CourseRepository;

@RestController
@RequestMapping("/dnevnik")
public class CourseController {
	
	@Autowired
	CourseRepository repository;

	@RequestMapping("/getAllCourses")
	public Iterable<Course> getAllCourses() {
		return repository.findAll();
	}
}
