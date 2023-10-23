package com.hospitalManagement.main.controller;

import java.util.List;

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
		System.out.println(p.getId());
		System.out.println(p.getDoc().getId());
		System.out.println(p.getDoc().getAadhaar());
		
	Patient pp=	ps.updatepatient(p);
		
	return new ResponseEntity<Patient>(pp,HttpStatus.CREATED);
	}
	
	
	
	
	@GetMapping(value="/get")
	public ResponseEntity<List<Patient>> getAllDetails()
	{
		List<Patient> allPatient = ps.getAll();
	
		return new ResponseEntity<List<Patient>>(allPatient,HttpStatus.OK);	}
	
	@GetMapping(value="/get/{id}")
	public ResponseEntity<Patient> getAllDetails(@PathVariable int id)
	{
		Patient singlePatient = ps.getSinglePatient(id);
		return new ResponseEntity<Patient>(singlePatient,HttpStatus.OK);	}
	  
	
}

