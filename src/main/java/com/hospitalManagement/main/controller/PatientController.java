package com.hospitalManagement.main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospitalManagement.main.model.Patient;
import com.hospitalManagement.main.serviceInterface.PatientServiceI;



@RestController
@CrossOrigin("*")
public class PatientController {

	@Autowired
	PatientServiceI ps;
	
	@PostMapping(value = "/save")
	public ResponseEntity<Patient> savepatient(@RequestBody Patient p)
	{
	
	Patient pp=	ps.savepatient(p);
		
	return new ResponseEntity<Patient>(pp,HttpStatus.CREATED);
	}
	
	@PutMapping(value = "/update")
	public ResponseEntity<Patient> updatepatient(@RequestBody Patient p)
	{
		
	Patient pp=	ps.updatepatient(p);
		
	return new ResponseEntity<Patient>(pp,HttpStatus.CREATED);
	}
	
	
	
	
	@GetMapping(value="/get/{firstname}/{mobno}")
	public ResponseEntity<Patient> getDetailsOne(@PathVariable String firstname, @PathVariable String mobno)
	{
		Patient gotOnePatient = ps.getDetailsOne(firstname,mobno);
	
		return ResponseEntity.status(HttpStatus.OK).body(gotOnePatient);
	}
}

