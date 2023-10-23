package com.hospitalManagement.main.serviceImpl;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hospitalManagement.main.model.Patient;
import com.hospitalManagement.main.repository.PatientRepository;
import com.hospitalManagement.main.serviceInterface.PatientServiceI;



@Service
public class PatientService implements PatientServiceI {

	@Autowired
	PatientRepository pr;

	@Override
	public Patient savepatient(Patient p) {
		
		
		return pr.save(p);
		}

	@Override
	public Patient updatepatient(Patient p) {
		
	
		
		return pr.save(p);
	}
	@Override
	public List<Patient> getAll() {
		
		List<Patient>	list =pr.findAll();
		Collections.sort(list,(a,b)->{
			return b.getId()-a.getId();
		});
		
		
	return list;
	}

	@Override
	public Patient getSinglePatient(int id) {
		
		return pr.findAllById(id);
	}

	
	
}
