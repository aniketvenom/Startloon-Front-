import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewPatientsComponent } from './view-patients/view-patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ViewSinglePatientComponent } from './view-single-patient/view-single-patient.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: 'full' },
  {path:"home",component:HomeComponent},
  {path:"viewPatients",component:ViewPatientsComponent},
  {path:"addPatients",component:AddPatientComponent},
  {path:"viewAllPatients",component:ViewPatientsComponent},
  {path:"viewSinglePatient/:patientId",component:ViewSinglePatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
