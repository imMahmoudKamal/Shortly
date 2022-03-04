import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    StatisticsComponent,
    FormComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
