import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service';
import { Patient } from '../patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {

  patient : Patient[] | undefined;

  constructor(private authService:AuthService,private router:Router){}
  
  ngOnInit(): void {
    this.authService.seeAllPatients().subscribe(
      data=>
      {
           this.patient = data;
      }
    )
  }
;

updatePatient(patientId : any){}

viewPatient(patientId : any){
  this.router.navigate(['viewSinglePatient',patientId])
}

deletePatient(patientId : any){}

}
