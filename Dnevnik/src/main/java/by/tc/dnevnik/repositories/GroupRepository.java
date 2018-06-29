package by.tc.dnevnik.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import by.tc.dnevnik.models.Group;
import by.tc.dnevnik.models.GroupStatus;
import by.tc.dnevnik.models.User;

public interface GroupRepository  extends JpaRepository<Group, Long> {
	
	@Query("SELECT m FROM Group m WHERE m.status = :status AND m.teacher = :teacher")
	Iterable<Group> getGroupsByStatusAndTeacher(@Param("status") GroupStatus status, @Param("teacher") User teacher);
}
