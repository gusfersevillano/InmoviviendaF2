import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoListComponent} from './components/photo-list/photo-list.component';
import {PhotoFormComponent} from './components/photo-form/photo-form.component';
import {PhotoPreviewComponent} from './components/photo-preview/photo-preview.component';
import {SingupComponent} from './components/singup/singup.component';
import {SinginComponent} from './components/singin/singin.component';
import {PrincipalComponent} from './components/principal/principal.component';


const routes: Routes = [

{
	path:'principal',
	component: PrincipalComponent,
},
{
	path:'signin',
	component: SinginComponent,
},
{
	path:'signup',
	component: SingupComponent,
},
{
	path:'photos',
	component: PhotoListComponent,
},

{
	path: 'photos/new',
	component: PhotoFormComponent,
},
{
	path: 'photos/:id',//se coloca : porque es dinámico
	component: PhotoPreviewComponent,
},
{
	path:'',
	redirectTo:'/principal',
	pathMatch:'full',
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
