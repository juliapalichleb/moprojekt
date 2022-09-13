import {Status} from "./Status";

export interface Candidate {
    _id?: string;
    name: string;
    age: number;
    email: string;
    tel: number;
    date: string;
    status: Status;
}
