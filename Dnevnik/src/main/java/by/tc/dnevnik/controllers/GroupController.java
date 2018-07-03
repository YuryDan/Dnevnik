package by.tc.dnevnik.controllers;

import java.util.ArrayList;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import by.tc.dnevnik.models.Course;
import by.tc.dnevnik.models.CustomUserDetails;
import by.tc.dnevnik.models.Group;
import by.tc.dnevnik.models.GroupStatus;
import by.tc.dnevnik.models.Student;
import by.tc.dnevnik.models.User;
import by.tc.dnevnik.repositories.CourseRepository;
import by.tc.dnevnik.repositories.GroupRepository;
import by.tc.dnevnik.repositories.StudentRepository;
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
			try {
				name = teacher.substring(teacher.indexOf(" ") + 1, teacher.indexOf(" ", teacher.indexOf(" ") + 1));
				surname = teacher.substring(0, teacher.indexOf(" "));
				secondName = teacher.substring(name.length() + surname.length() + 2);
			}catch(StringIndexOutOfBoundsException e) {
				return new ArrayList<>();
			}
		}

		User user = userRepository.findByNameAndSurnameAndSecondName(name, surname, secondName);
		Course cours = courseRepository.findByType(course);
		if(number.equals("") && user == null && cours == null) {
			return new ArrayList<>();
		}
		return repository.findBySeveralParam(number, user, cours);
	}
	
	@Autowired
	StudentRepository studentRepository;
	
	@RequestMapping("/getInfoAboutGroup")
	public Optional<Group> getInfoAboutGroup(Long id) {
		return repository.findById(id);
	}
	
	@RequestMapping("/getInfoAboutGroupUsers")
	public Set<Student> getInfoAboutGroupUsers(Long id) {
		Group group = repository.findById(id).get();
		return group.getStudents();
	}

}
