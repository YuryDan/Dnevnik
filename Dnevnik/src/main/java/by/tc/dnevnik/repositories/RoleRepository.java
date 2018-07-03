package by.tc.dnevnik.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import by.tc.dnevnik.models.Role;


@Repository("roleRepository")
public interface RoleRepository extends JpaRepository<Role, Long> {
	Role findByType(String type);
}
