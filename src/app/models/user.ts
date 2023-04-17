import { Role } from "./role";

export class User {
    id!:number;
    cin!:string;
    firstName!:string;
    lastName!:string;
    gender!:string;
    string!:string;
    birthDate!:Date;
    phone!:string;
    mail!:string;
    password!:string;
    department!:string;
    hiringDate!:Date;
    evaluator!:boolean;
    jury!:boolean;
    speaker!:boolean;
    bacSection!:string;
    educationalLevel!:string;
    speciality!:string;
    classe!:string;
    creationDate!:Date;
    role!:Role;

}
