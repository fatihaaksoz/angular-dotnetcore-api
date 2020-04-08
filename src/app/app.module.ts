import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from 'ngx-gallery';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {FileUploadModule} from 'ng2-file-upload'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CityDetailComponent } from './cityDetail/cityDetail.component';
import { CityAddComponent } from './cityAdd/cityAdd.component';
import { AlertifyService } from './services/alertify.service';
import { RegisterComponent } from './register/register.component';
import {NgxEditorModule} from 'ngx-editor';
import { PhotoComponent } from './photo/photo.component';


@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent,
      CityAddComponent,
      RegisterComponent,
      PhotoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      NgxGalleryModule,
      FormsModule,
      ReactiveFormsModule,
      NgxEditorModule,
      FileUploadModule
      
   ],
   providers: [
      AlertifyService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
