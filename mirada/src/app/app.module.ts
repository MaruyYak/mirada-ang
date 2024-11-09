import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MainComponent } from './pages/main/main.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { HomeSectionComponent } from './pages/main/home-section/home-section.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { VisionSectionComponent } from './pages/main/vision-section/vision-section.component';
import { CardComponent } from './pages/catalog/card/card.component';
import { PreviewCardsComponent } from './pages/main/preview-cards/preview-cards.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InfoSectionComponent } from './pages/main/info-section/info-section.component';
import { ValuesComponent } from './pages/values/values.component';
import { BurgerMenuComponent } from './shared/components/header/burger-menu/burger-menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ImageModalComponent } from './pages/catalog/image-modal/image-modal.component';

@NgModule({
  declarations: [ 
    AppComponent,   
    MainComponent, 
    CatalogComponent, 
    HomeSectionComponent, 
    VisionSectionComponent,
    HeaderComponent, 
    FooterComponent, 
    CardComponent, 
    PreviewCardsComponent, 
    ButtonComponent, 
    InfoSectionComponent, 
    ValuesComponent, 
    BurgerMenuComponent,
    ImageModalComponent,
  ],
  imports: [ 
    BrowserModule, 
    RouterModule,
    AppRoutingModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }