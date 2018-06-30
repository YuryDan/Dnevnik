package by.tc.dnevnik.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import by.tc.dnevnik.models.Course;

public interface CourseRepository  extends JpaRepository<Course, Long> {
	
	Course findByType(String type);
	
}
