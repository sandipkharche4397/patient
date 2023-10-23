package com.hospitalManagement.main.serviceInterface;

import java.util.List;

import com.hospitalManagement.main.model.Patient;

public interface PatientServiceI {

	Patient savepatient(Patient p);

	Patient updatepatient(Patient p);

	List<Patient> getAll();

	Patient getSinglePatient(int id);

}
