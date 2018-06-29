package by.tc.dnevnik.security;

import java.io.Serializable;

public class JwtAuthenticationRequest implements Serializable {

	private static final long serialVersionUID = -1006343242081272424L;
	private String email;
	private String password;

	public JwtAuthenticationRequest() {
	}

	public JwtAuthenticationRequest(String email, String password) {
		this.setUsername(email);
		this.setPassword(password);
	}

	public String getEmail() {
		return this.email;
	}

	public void setUsername(String email) {
		this.email = email;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
