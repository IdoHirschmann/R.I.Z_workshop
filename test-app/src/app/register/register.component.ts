import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CognitoService} from "../cognito.service";
import {IUser} from "../user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  isConfirmed: boolean = false;
  user:IUser = {} as IUser;
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(private route: Router,
              private cognito: CognitoService,
              private formBuilder: FormBuilder,
              private router: Router, ){
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }



  ngOnInit() {

  }

  onSubmit() {

    this.user.email = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;

    this.cognito.signUp(this.user.email, this.user.password, "ido").then((res) =>{
      this.isConfirmed = true;
    })

    if(this.isConfirmed){
      console.log('approvved')
    }
  }
}
