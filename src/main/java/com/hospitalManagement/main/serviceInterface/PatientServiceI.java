package com.hospitalManagement.main.serviceInterface;

import com.hospitalManagement.main.model.Patient;

public interface PatientServiceI {

	Patient savepatient(Patient p);

	Patient updatepatient(Patient p);

	Patient getDetailsOne(String firstname, String mobno);

}
