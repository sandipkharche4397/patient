package com.hospitalManagement.main.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class PermamentAddress {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String flatno;
	private String village;
	private String landmark;
	private String postOffice;
	private String taluka;
	private String district;
	private String state;
	private String pincode; 
	private String country;
	
}
