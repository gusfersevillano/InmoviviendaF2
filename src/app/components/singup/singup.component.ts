import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/singup.service' ;
import {Router} from '@angular/router';

interface htmlInputEvent extends Event{
	target:HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private router: Router,
  			private UserService: UserService,	

  	) { }

  ngOnInit() {
  }

uploadUser(username:HTMLInputElement, email: HTMLTextAreaElement, password: HTMLTextAreaElement):boolean{
 	console.log(username.value);
 	console.log(email.value);
 	console.log(password.value);
 	//console.log(description.value)
 	this.UserService.createUser(username.value, email.value, password.value)
 	.subscribe(res => {
 		this.router.navigate(['signin']);
 	}, err => console.log(err));

 	return false;
 }

}
