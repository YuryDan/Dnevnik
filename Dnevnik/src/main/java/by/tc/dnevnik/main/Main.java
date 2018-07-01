package by.tc.dnevnik.main;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class Main {
	
	static BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

	public static void main(String[] args) {
		System.out.println(encoder.encode("qwertyQ1"));
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection cn = DriverManager.getConnection("jdbc:mysql://127.0.0.1/dnevnik", "root", "root");
			Statement st = cn.createStatement();
			st.executeUpdate("INSERT INTO roles VALUES(1, 'admin')");
			st.executeUpdate("INSERT INTO roles VALUES(2, 'manager')");
			st.executeUpdate("INSERT INTO roles VALUES(3, 'teacher')");
			
			st.executeUpdate("INSERT INTO courses VALUES(1, 'Java SE')");
			st.executeUpdate("INSERT INTO courses VALUES(2, 'C#')");
			st.executeUpdate("INSERT INTO courses VALUES(3, 'Java EE')");
			st.executeUpdate("INSERT INTO courses VALUES(4, 'Pyton')");
			
			st.executeUpdate("INSERT INTO users VALUES(1, 'b', now(), 'Юрий',  '"+encoder.encode("b")+"', 'Викторович', 'Демит', 3)");
			st.executeUpdate("INSERT INTO users VALUES(2, 'g', now(), 'Дмитрий',  '"+encoder.encode("g")+"', 'Пупс', 'Арчи', 3)");
			st.executeUpdate("INSERT INTO users VALUES(3, 'qwerty3@mail.ru', now(), 'Алексей',  '"+encoder.encode("qwertyQ1")+"', 'Рустамович', 'Немогай', 3)");
			st.executeUpdate("INSERT INTO users VALUES(4, 'qwerty4@mail.ru', now(), 'Сергей', '"+encoder.encode("qwertyQ1")+"', 'Сергеевич', 'Петрухин', 1)");
			st.executeUpdate("INSERT INTO users VALUES(5, 'a', now(), 'Сергей', '$2a$10$HeCyO0bwiwAfHkAPLa8zKuDsy7ij/f6N8kylhFUZ13UqcBchCunrS', 'Александрович', 'Петрухин', 1)");
			
			st.executeUpdate("INSERT INTO group_status VALUES(1, 'active')");
			st.executeUpdate("INSERT INTO group_status VALUES(2, 'complete')");
			
			st.executeUpdate("INSERT INTO groups VALUES(1, 'онедельник, среда, пятница', 2, now(), '25-2018', 25, now(), '16.00', 1, 2, 1)");
			st.executeUpdate("INSERT INTO groups VALUES(2, 'вторник, четверг', 4, now(), '21-2018', 36, now(), '19.00', 2, 2, 2)");
			st.executeUpdate("INSERT INTO groups VALUES(3, 'суббота, воскресенье', 4, now(), '22-2018', 18, now(), '9.00', 3, 3,1 )");
			st.executeUpdate("INSERT INTO groups VALUES(4, 'Понедельник, пятница', 2, now(), '23-2018', 44, now(), '12.00', 4, 4, 4)");
			st.executeUpdate("INSERT INTO groups VALUES(5, 'Понедельник, пятница', 2, now(), '24-2018', 44, now(), '12.00', 4, 4, 5)");
			st.executeUpdate("INSERT INTO groups VALUES(6, 'Понедельник, пятница', 2, now(), '27-2018', 44, now(), '12.00', 4, 2, 5)");
			st.executeUpdate("INSERT INTO groups VALUES(7, 'Понедельник, пятница', 2, now(), '26-2018', 44, now(), '12.00', 4, 2, 5)");
			st.executeUpdate("INSERT INTO groups VALUES(8, 'Понедельник, пятница', 2, now(), '31-2018', 44, now(), '12.00', 4, 1, 5)");
			st.executeUpdate("INSERT INTO groups VALUES(9, 'Понедельник, пятница', 2, now(), '32-2018', 44, now(), '12.00', 4, 1, 5)");
			st.executeUpdate("INSERT INTO groups VALUES(10, 'Понедельник, пятница', 2, now(), '33-2018', 44, now(), '12.00', 4, 1, 5)");
			st.executeUpdate("INSERT INTO groups VALUES(11, 'Понедельник, пятница', 2, now(), '34-2018', 44, now(), '12.00', 4, 1, 5)");
			st.executeUpdate("INSERT INTO groups VALUES(12, 'Понедельник, пятница', 2, now(), '35-2018', 44, now(), '12.00', 4, 1, 5)");
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

}
