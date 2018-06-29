package by.tc.dnevnik.controllers;

public class AuthenticationException extends RuntimeException {
	
	private static final long serialVersionUID = 4685734499573835578L;

	public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    	System.out.println("AuthenticationException " + message);
    }
}
