package by.tc.dnevnik.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import by.tc.dnevnik.models.CustomUserDetails;
import by.tc.dnevnik.models.Group;
import by.tc.dnevnik.models.GroupStatus;
import by.tc.dnevnik.models.User;
import by.tc.dnevnik.repositories.GroupRepository;

@RestController
@RequestMapping("/dnevnik")
public class GroupController {
	
	@Autowired
	GroupRepository repository;
	
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

}
