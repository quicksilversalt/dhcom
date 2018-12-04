import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { FooterComponent } from './footer/footer.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { ExhibitionsComponent } from './body-content/exhibitions/exhibitions.component';
import { WritingComponent } from './body-content/writing/writing.component';
import { OnlineArtComponent } from './body-content/online-art/online-art.component';
import { MotionArtComponent } from './body-content/motion-art/motion-art.component';
import { StaticArtComponent } from './body-content/static-art/static-art.component';
import { Route, RouterModule } from '@angular/router';

const appRoutes: Route = [
  {path: '', component: BodyContentComponent},
  {path: 'static-art', component: StaticArtComponent},
  {path: 'motion-art', component: MotionArtComponent},
  {path: 'online-art', component: OnlineArtComponent},
  {path: 'writing', component: WritingComponent},
  {path: 'exhibitions', component: ExhibitionsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    FooterComponent,
    BodyContentComponent,
    ExhibitionsComponent,
    WritingComponent,
    OnlineArtComponent,
    MotionArtComponent,
    StaticArtComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
