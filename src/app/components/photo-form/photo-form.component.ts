import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../../services/photo.service' ;
import {ActivatedRoute, Router, Params} from '@angular/router';
import {CanvasService} from '../../services/canvas.service' ;
import {User} from '../../inferfaces/Photo';
import {UserService} from  '../../service/singup.service';



interface htmlInputEvent extends Event{
	target:HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})

export class PhotoFormComponent implements OnInit {
	file:File;
  file1: File;
	text:string;
  idv: string;
  user1: string;
	photoSelected: string | ArrayBuffer;
  constructor(private photoService: PhotoService, 
              private router: Router, 
              private rutaActiva: ActivatedRoute,
              private activeRoute: ActivatedRoute,
              private UserService: UserService,
  	
   ) { }

  ngOnInit() {

      this.activeRoute.params.subscribe(params =>{
        this.idv= params ['idv']; 
       this.UserService.getUsuario(this.idv).subscribe(
           res => {this.user1 = res.username},
           err=> console.log(err)
         )
     
      
      })   




  }



 onPhotoSelected(event: htmlInputEvent):void{

 	if(event.target.files && event.target.files[0]){
 		this.file=<File>event.target.files[0];
 		
     //image preview
 		const reader =new FileReader();
 		reader.onload = e => this.photoSelected = reader.result;
 		reader.readAsDataURL(this.file);
 	}

 }

 uploadPhoto(venta:HTMLInputElement, precio:HTMLInputElement, sector:HTMLInputElement, metros:HTMLInputElement, caracteristicas: HTMLTextAreaElement, vendedor: HTMLInputElement):boolean{

   //console.log(venta.value);
   //console.log(precio.value);
   //console.log(sector.value);
   //console.log(metros.value);
   //console.log(caracteristicas.value);
   //console.log(vendedor.value);

    var canvas = document.getElementById("mycanvas") as HTMLCanvasElement;
    var img    = canvas.toDataURL("image/png");
    img = img.replace("image/jpeg", "image/octet-stream");

    var file3 = dataURItoBlob(img);

    function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
}

      this.file1=<File>file3;
      //this.idv= params ['idv'];
  

     
     // console.log(img);

//ojo esta es la parte que vale 



  this.photoService.createPhoto(venta.value, precio.value, sector.value, metros.value, caracteristicas.value, vendedor.value, this.file1)
  .subscribe(res => {
   this.router.navigate(['/photos/', this.idv]);
  
 }, err => console.log(err));

   return false;
 }

dibujar():boolean{

  	   
    var canvas = new CanvasService("mycanvas");
    var img2 = document.getElementById("casa") as HTMLImageElement;
    var mysrc= img2.src;
   
    canvas.drawImage(mysrc, 0, 0, 335, 260, 1);
    return false;
 
  }
  dibujar1():boolean{
  	   
    var canvas = new CanvasService("mycanvas");
    //canvas.drawLine(10, 10, 200, 200, "red", 2);
    //canvas.drawCircle(200, 200, 100, "black", 1, "yellow", .4);
    //canvas.drawRectangulo(0, 0, 100, 260, "black", 1, "yellow", 1);
	//canvas.drawTexto("logico", 0, 0);
	canvas.drawRectangulo(0, 0, 120, 260, "white", 1, "white", 0.1 );
   return false;

  }
    dibujar2():boolean{
  	   
    var canvas = new CanvasService("mycanvas");

    var fillStyle ="rgba(0, 0, 0)";
    var font = "16px Arial";

    var fillStyle1 ="rgba(0, 0, 0, 0.4)";
    var font1 = "9px Arial";
     var font2 = "12px Arial";
     var x=5;
     var y=5;

    var letrero1 = document.getElementById("L1") as HTMLInputElement;
    var titulo1 = letrero1.value;
    canvas.drawTexto(titulo1, x+30, 65, fillStyle, font);


    var letrero2 = document.getElementById("L2") as HTMLInputElement;
    var titulo2 = letrero2.value;
    canvas.drawTexto("Precio:", x+10, y+80, fillStyle1, font1);
    canvas.drawTexto(titulo2, x+40, y+93, fillStyle, font2);

    var letrero3 = document.getElementById("L3") as HTMLInputElement;
    var titulo3 = letrero3.value;
    canvas.drawTexto("Sector:", x+10, y+108, fillStyle1, font1);
    canvas.drawTexto(titulo3, x+40, y+121, fillStyle, font2);

    var letrero4 = document.getElementById("L4") as HTMLInputElement;
    var titulo4 = letrero4.value;
    canvas.drawTexto("Área (m²):", x+10, y+136, fillStyle1, font1);
    canvas.drawTexto(titulo4, x+40, y+148, fillStyle, font2);

    canvas.drawLine(10, 180, 100, 180, "rgba(0,0,0)", 1);
    canvas.drawLine(10, 185, 100, 185, "rgba(0,230,230)", 1);

    canvas.drawImage("assets/LOGO5.png", x+5, 5, 110, 45, 1);

  

     return false;

	
  }





}





