import { ContactDetails } from "./contact-details";
import { LocalAddress } from "./local-address";
import { PermamentAddress } from "./permament-address";

export class Patient {


    id:number;
    firstname:string;
    middlename:string;
    lastname:string;
    dob:number;
    title:string;
    gender:string;
    mobno:number;
    date:any;
    laddr: LocalAddress;
    paddr:PermamentAddress;
    cd:ContactDetails

}

	