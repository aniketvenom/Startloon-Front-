import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../patient';

@Component({
  selector: 'app-view-single-patient',
  templateUrl: './view-single-patient.component.html',
  styleUrls: ['./view-single-patient.component.css']
})
export class ViewSinglePatientComponent implements OnInit {

  patientId !: String;

  patient : Patient = new Patient();

 

  constructor(private authService:AuthService,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {

    this.patientId = this.activatedRoute.snapshot.params['patientId'];
    this.getPatients(this.patientId);
    
  }

  getPatients(PId : String){

    this.authService.seeSinglePatient(this.patientId).subscribe(
      data=>
      {
        this.patient=data;
      }
    )
  }

  



}
