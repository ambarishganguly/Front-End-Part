import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'Service/registration.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(public service:RegistrationService) { }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm){
    this.service.postRegistration().subscribe(
      (res)=>{
        console.log('submitted Successfully to database');
        alert('Profile Created Successfully');
      },
      (err)=>{
        console.log('error');
      }
      
    )
  }
}
