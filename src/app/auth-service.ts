import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Patient } from "./patient";
import { Observable } from "rxjs";

const Api = "http://localhost:8080/";
const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http:HttpClient){};

    savePatients(patient : Patient):Observable<Patient>
    {
        return this.http.post<Patient>(Api+"savePatient",patient);
    }

    seeAllPatients():Observable<Patient[]>
    {
        return this.http.get<Patient[]>(Api+"getPatientsDetails");
    }

    seeSinglePatient(patientId : String): Observable<Patient>
    {
        return this.http.get<Patient>(Api+"seeSinglePatient/"+`${patientId}`);
    }

    updatePatient(patient : Patient , patientId : String): Observable<Patient>
    {
        return this.http.post<Patient>(Api+"updatePatientWithId/"+`${patientId}`,patient);
    }

    deletePatient(patientId : String):Observable<any>
    {
        return this.http.delete(Api+"deletePatientWithId/"+`${patientId}`);
    }
}
