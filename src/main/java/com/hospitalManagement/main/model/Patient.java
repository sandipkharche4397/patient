package com.hospitalManagement.main.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Patient {

	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private int id;
	@NotEmpty(message = "Enter All Field correctly")
	private String firstname;
	@NotEmpty
	private String middlename;	
	@NotEmpty
	private String lastname;
	private int age;
	@NotEmpty
	private String title;
	@NotEmpty
	private String gender;
	@NotEmpty
	private String mobno;
	private String registerdate;
	private String dob;
	private String maritalstatus;
	private String address;
	private String patientType;
	
	
	
	
	
	
	
	private String auditby;
	private String enterby;
	private String mrdno;
	
	@OneToOne(cascade = CascadeType.ALL)
	private LocalAddress laddr;
	@OneToOne(cascade = CascadeType.ALL)
	private PermamentAddress paddr;
	@OneToOne(cascade = CascadeType.ALL)
	private ContactDetails cd;
	@OneToOne(cascade = CascadeType.ALL)
	private IncomeDetails income;
	@OneToOne(cascade = CascadeType.ALL)
	private PatientDocuments doc;
	
	@OneToOne(cascade = CascadeType.ALL)
	private DoctorDetails drdetails;
	
	@OneToOne(cascade = CascadeType.ALL)
	private PatientRelative patientrel;
	
}
