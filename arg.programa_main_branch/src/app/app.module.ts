import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
<<<<<<< Updated upstream
import { ApLogoComponent} from './components/ap-logo/ap-logo.component';
=======
import { APLogoComponent } from './components/ap-logo/ap-logo.component';
>>>>>>> Stashed changes
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HySSkillsComponent } from './components/hy-s-skills/hy-s-skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< Updated upstream
    ApLogoComponent,
=======
    APLogoComponent,
>>>>>>> Stashed changes
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HySSkillsComponent,
    ProyectosComponent,
<<<<<<< Updated upstream
    FooterComponent,
=======
    FooterComponent
>>>>>>> Stashed changes
  ],

  imports: [
    BrowserModule,
<<<<<<< Updated upstream
    FormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
=======
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
