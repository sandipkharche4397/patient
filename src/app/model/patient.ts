import { ContactDetails } from "./contact-details";
import { IncomeDetails } from "./income-details";
import { LocalAddress } from "./local-address";
import { PatientDocuments } from "./patient-documents";
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
    
  
    laddr: LocalAddress;
    paddr:PermamentAddress;
    cd:ContactDetails;
    income:IncomeDetails;
    doc:PatientDocuments;
}

	