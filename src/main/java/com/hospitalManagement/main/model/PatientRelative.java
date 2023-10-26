package com.hospitalManagement.main.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PatientRelative {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String relativename;
	private String relativeaddr;
	private String relation;
	private String mobno;
}
