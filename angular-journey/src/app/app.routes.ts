import { Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:"home",component:HomeComponentComponent},
    {path:"about",component:AboutComponentComponent},
    {path:"blog",component:BlogComponentComponent},
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"**",component:NotFoundComponent}
];
