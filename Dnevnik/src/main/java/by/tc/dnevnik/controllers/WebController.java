package by.tc.dnevnik.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebController {
	
	@RequestMapping(value = "/*")
	public String indexPage() {
		return "index";
	}

}
