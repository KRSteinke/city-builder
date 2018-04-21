import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CityBuilderMaterialModule } from './city-builder-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { MainNavigationHeaderComponent} from './navigation/main-nav-header.component';


@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    MainNavigationHeaderComponent
  ],
  imports: [
    BrowserModule,
    CityBuilderMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
