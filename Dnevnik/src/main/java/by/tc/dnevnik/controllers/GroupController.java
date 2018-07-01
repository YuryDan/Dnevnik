package by.tc.dnevnik.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import by.tc.dnevnik.models.Course;
import by.tc.dnevnik.models.CustomUserDetails;
import by.tc.dnevnik.models.Group;
import by.tc.dnevnik.models.GroupStatus;
import by.tc.dnevnik.models.User;
import by.tc.dnevnik.repositories.CourseRepository;
import by.tc.dnevnik.repositories.GroupRepository;
import by.tc.dnevnik.repositories.UserRepository;

@RestController
@RequestMapping("/dnevnik")
public class GroupController {
	
	@Autowired
	GroupRepository repository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	CourseRepository courseRepository;
	
	@RequestMapping("/getActiveGroups")
	public Iterable<Group> getActiveGroups() {
		CustomUserDetails cud = (CustomUserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return repository.getGroupsByStatusAndTeacher(new GroupStatus(1L), new User(cud.getId()));
	}
	
	@RequestMapping("/getCompleteGroups")
	public Iterable<Group> getCompleteGroups() {
		CustomUserDetails cud = (CustomUserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return repository.getGroupsByStatusAndTeacher(new GroupStatus(2L), new User(cud.getId()));
	}
	
	@RequestMapping("/getAllGroups")
	public Iterable<Group> getAllGroups() {
		return repository.findAll();
	}
	
	@RequestMapping("/findBySeveralParam")
	public Iterable<Group> findBySeveralParam(String number, String course, String teacher) {
		String name = "";
		String surname = "";
		String secondName = "";
		if (!teacher.equals("")) {
			name = teacher.substring(teacher.indexOf(" ") + 1, teacher.indexOf(" ", teacher.indexOf(" ") + 1));
			surname = teacher.substring(0, teacher.indexOf(" "));
			secondName = teacher.substring(name.length() + surname.length() + 2);
		}

		User user = userRepository.findByNameAndSurnameAndSecondName(name, surname, secondName);
		Course cours = courseRepository.findByType(course);
		return repository.findBySeveralParam(number, user, cours);
	}

}
