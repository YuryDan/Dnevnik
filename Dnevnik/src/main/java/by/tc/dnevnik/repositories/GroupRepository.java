package by.tc.dnevnik.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import by.tc.dnevnik.models.Course;
import by.tc.dnevnik.models.Group;
import by.tc.dnevnik.models.GroupStatus;
import by.tc.dnevnik.models.User;

public interface GroupRepository  extends JpaRepository<Group, Long> {
	
	@Query("SELECT m FROM Group m WHERE m.status = :status AND m.teacher = :teacher")
	Iterable<Group> getGroupsByStatusAndTeacher(@Param("status") GroupStatus status, @Param("teacher") User teacher);
	
	@Query("SELECT m FROM Group m WHERE m.number LIKE %:number% AND m.teacher LIKE %:teacher%")
	List<Group> findBySeveralParam(@Param("number") String number, @Param("teacher") User teacher);
	
	//@Query("SELECT m FROM Group m WHERE m.number LIKE %:number% AND m.teacher LIKE %:teacher%")
	//List<Group> findBySeveral(@Param("number") String number);
	
	List<Group> findByNumber(String number);
	List<Group> findByCourse(Course course);
	List<Group> findByTeacher(User teacher);
	List<Group> findByNumberAndCourse(String number, Course course);
	List<Group> findByNumberAndTeacher(String number, User teacher);
	List<Group> findByCourseAndTeacher(Course course, User teacher);
	List<Group> findByNumberAndCourseAndTeacher(String number, Course course, User teacher);
}
