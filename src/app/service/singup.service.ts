import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
//import {Photo} from '../inferfaces/Photo';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  URI='http://localhost:4000/api/signup';
  URI_p1='http://localhost:3000/api/auth/signup/';
  URI_in='http://localhost:4000/api/signin';

  constructor(private http:HttpClient,
              ) { }

  createUser(username: string, email: string, password: string ){
    console.log(username);
    console.log(email);
    console.log(password);
  	const fd = new FormData();
  	fd.append('username', username);
  	fd.append('email', email);
  	fd.append('password', password);

  	return this.http.post(this.URI, {"username":username, "email":email, "password":password});
  }

  signinUser(email: string, password: string ){
   
    return this.http.post(this.URI_in, {"email":email, "password":password});
  }

 
}
