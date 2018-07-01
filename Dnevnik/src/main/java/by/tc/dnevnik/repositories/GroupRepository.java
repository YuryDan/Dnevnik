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
	
	@Query("SELECT m FROM Group m WHERE (?2 is null or m.teacher LIKE CONCAT('%',?2,'%')) AND (?1 is null or m.number LIKE CONCAT('%',?1,'%')) AND (?3 is null or m.course LIKE CONCAT('%',?3,'%'))")
	List<Group> findBySeveralParam(@Param("number") String number, @Param("teacher") User teacher, @Param("course") Course course);
}
