import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeSectionComponent } from './pages/main/home-section/home-section.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [ 
    AppComponent,   
    MainComponent, 
    CatalogComponent, 
    HomeSectionComponent, 
    HeaderComponent, 
    FooterComponent,
  ],
  imports: [ 
    BrowserModule, 
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }