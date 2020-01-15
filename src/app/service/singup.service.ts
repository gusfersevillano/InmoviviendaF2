import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../inferfaces/Photo';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL='http://165.227.20.230:4000/';
  URL1='http://localhost:4000/';

  constructor(private http:HttpClient,
              ) { }

  createUser(username: string, telefono: string, password: string ){
    //console.log(username);
    //console.log(email);
    //console.log(password);
  	//const fd = new FormData();
  	//fd.append('username', username);
  	//fd.append('email', email);
  	//fd.append('password', password);

  	return this.http.post(`${this.URL}api/signup`, {"username":username, "telefono":telefono, "password":password});
  }

  signinUser(telefono: string, password: string ){

   
    return this.http.post<User>(`${this.URL}api/signin`, {"telefono": telefono, "password":password});
  }

  getUsuario(idv: string){
    //console.log(idv);
    return this.http.post<User>(`${this.URL}api/datos${idv}`, {idv})

   }

 
}
