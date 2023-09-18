import { Routes } from "@angular/router";
import { MygalleryComponent } from './app/Gallery/mygallery/mygallery.component';
import { ImagesDetailsComponent } from './app/images/images-details.component';


export const appRoutes: Routes = 
[
    {
        path: 'Gallery',
        component: MygalleryComponent,
    },

    {
        path: 'image/:id',
        component: ImagesDetailsComponent,
    },

    {
        path: '',
        redirectTo: '/Gallery',
        pathMatch: 'full'
    },

]