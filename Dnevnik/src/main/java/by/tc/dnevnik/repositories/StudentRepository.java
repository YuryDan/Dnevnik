package by.tc.dnevnik.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import by.tc.dnevnik.models.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{

}
