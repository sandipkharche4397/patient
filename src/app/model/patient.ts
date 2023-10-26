import { ContactDetails } from "./contact-details";
import { DoctorDetails } from "./doctor-details";
import { IncomeDetails } from "./income-details";
import { LocalAddress } from "./local-address";
import { PatientDocuments } from "./patient-documents";
import { PatientRelative } from "./patient-relative";
import { PermamentAddress } from "./permament-address";

export class Patient {

    
    id:number;
    firstname:string;
    middlename:string;
    lastname:string;
    age:number;
    title:string;
    gender:string;
    mobno:number;
    registerdate:string;
    auditby:string;
    
    enterby:string;
    mrdno:string;
    
dob:string;
   maritalstatus:string;
	address:string;
	 patientType:string;

  
    laddr: LocalAddress;
    paddr:PermamentAddress;
    cd:ContactDetails;
    income:IncomeDetails;
    doc:PatientDocuments;
    drdetails:DoctorDetails;
    patientrel:PatientRelative
}

	