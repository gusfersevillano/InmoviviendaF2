import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {PhotoService} from '../../services/photo.service'
import {Photo} from '../../inferfaces/Photo'

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {
	id: string;
	photo: Photo;
  idv: string;
  constructor(
  	private activeRoute: ActivatedRoute,
  	private router: Router,
  	private photoService: PhotoService,
  	) { }

  ngOnInit() {
  	this.activeRoute.params.subscribe(params =>{
  		this.id= params ['id'];
      this.idv= params ['idv'];
  	//	console.log(this.idv);
      this.photoService.getPhoto(this.id).subscribe(
  			res => {this.photo = res;},
  			err=> console.log(err)
  			)

  	})

  }

  deletePhoto(id: string){
    
  this.activeRoute.params.subscribe(params =>{
      this.id= params ['id'];
      this.idv= params ['idv'];
      console.log(this.idv);
    })



  	this.photoService.deletePhoto(id).subscribe(
  		res=> {
  			console.log(res),
  			this.router.navigate(['/photos/', this.idv])},
  		err=> console.log(err)
  		)
  }

  updatePhoto(title:HTMLInputElement, description:HTMLTextAreaElement): boolean {
  	
  	this.photoService.updatePhoto(this.id, title.value, description.value).subscribe(
  		res=> {
  			console.log(res),
  			this.router.navigate(['/photos'])},	
  		err=> console.log(err)
  		);
  	return false;
  }

}
