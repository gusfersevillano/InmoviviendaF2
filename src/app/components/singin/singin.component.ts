import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/singup.service' ;
import {ActivatedRoute,Router} from '@angular/router';
import {User} from '../../inferfaces/Photo';





interface htmlInputEvent extends Event{
	target:HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
	user3: User;
  id: string;

   constructor(private router: Router,
  			private UserService: UserService,
        private activeRoute: ActivatedRoute,
        private userService: UserService, 

  	) { }

  ngOnInit() {

	

  }


signinUser(telefono: HTMLTextAreaElement, password: HTMLTextAreaElement):boolean{
 	//console.log(username.value);
 	//console.log(telefono.value);
 	//console.log(password.value);
 	//console.log(description.value);

    this.UserService.signinUser(telefono.value, password.value).subscribe(
      
        res=> {
        this.user3=res;
        
        const idv = this.user3._id;
        //console.log(res);
        this.router.navigate(['/photos/', idv]);
        //this.router.navigate(['/photos/'], '5dd313bbd9c9f12c54d1f8f7' )

      },  
      err=> console.log(err)
      );
    return false;
  }






}


