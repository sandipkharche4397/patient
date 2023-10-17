package com.hospitalManagement.main.serviceImpl;

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
	public Patient getDetailsOne(String firstname,String mobno){
		Patient getOnePatient = pr.findAllByFirstnameAndMobno(firstname,mobno);
		return getOnePatient;
	}
	@Override
	public Patient updatepatient(Patient p) {
		
	
		
		return pr.save(p);
	}

	
	
}
