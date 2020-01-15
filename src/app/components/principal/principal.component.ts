import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service'
import {Router}from '@angular/router'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  photos =[];
  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {

this.photoService.getPhotos().subscribe(
  		res => {
  			this.photos= res;
  		},
  		err => console.log(err))
  }

  selectedCard(id: string){
  	this.router.navigate(['/photos', id]);

  	}
  }


