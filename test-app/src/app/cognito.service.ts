import { Injectable } from '@angular/core';
import {Amplify} from "aws-amplify";
import { signIn, signOut, signUp, confirmSignUp, updateUserAttributes } from 'aws-amplify/auth';
import {environment} from "./environment/environment";
import {IUser} from "./user";

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  constructor() {
    Amplify.configure({
      Auth: {Cognito:environment.Cognito}
    })
  }

  signUp(email: string, password: string, name: string){
    return signUp({
      username: email,
      password: password,
      options: {
        userAttributes: {name: name}
      }
    })
  }

}
