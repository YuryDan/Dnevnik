package by.tc.dnevnik.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import by.tc.dnevnik.models.User;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
	
	User findByNameAndSurnameAndSecondName(String name, String surname, String secondName);
}
