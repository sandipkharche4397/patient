package com.hospitalManagement.main.model;

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
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	

	@NotEmpty(message = "Enter All Field correctly")
	private String firstname;
	
	@NotEmpty
	private String middlename;
	
	@NotEmpty
	private String lastname;
	
	
	private int dob;
	
	@NotEmpty
	private String title;
	
	@NotEmpty
	private String gender;
	
	@NotEmpty
	private String mobno;
	
	private String status;
	@OneToOne(cascade = CascadeType.ALL)
	private LocalAddress laddr;
	@OneToOne(cascade = CascadeType.ALL)
	private PermamentAddress paddr;
	
	@OneToOne(cascade = CascadeType.ALL)
	private ContactDetails cd;
	
	
	
}
