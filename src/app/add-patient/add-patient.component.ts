import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {

  patient : Patient = new Patient();

  constructor( private router: Router,private authService:AuthService) {}

  form = new FormGroup(
    {
      name: new FormControl("",[Validators.required, Validators.minLength(3), Validators.maxLength(40)]),
      email:  new FormControl("",[Validators.required, Validators.email , Validators.maxLength(50)]),
      phone: new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10), 
      Validators.pattern('[6789][0-9]{9}')]),
      
      affectedSide : new FormControl("",[Validators.required,Validators.max(50),Validators.min(3)]),
      Condition : new FormControl("",[Validators.required,Validators.max(50),Validators.min(3)]),
      medicalHistory :new FormControl("",[Validators.required,Validators.max(50),Validators.min(3)]),
      Speciality : new FormControl("",[Validators.required,Validators.max(50),Validators.min(3)]),
      gender: new FormControl("",[Validators.required]),
      age: new FormControl("",[Validators.required])
      
    }
  );

  get f()
  {
    return this.form.controls;
  }

  onSubmit()
  {
    console.log("working");
    this.authService.savePatients(this.patient).subscribe(
      data=>
      {
        alert("New patient has been added")
        console.log(data);
        this.router.navigate(['/viewAllPatients'])
      }
    )
  }

}
