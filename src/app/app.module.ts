import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TouchNavbarComponent } from './navbar/navbar/navbar.component';
import { MygalleryComponent } from './Gallery/mygallery/mygallery.component';
import { ImagesDetailsComponent } from './images/images-details.component';
import { ImageService } from './images/shared/image.service';
import { ImageFilterPipe } from './images/shared/filter.pipe';
import { appRoutes } from 'src/routes';




@NgModule({
  declarations: [
    AppComponent,
    TouchNavbarComponent,
    MygalleryComponent,
    ImagesDetailsComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbAlertModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
