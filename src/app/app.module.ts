import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatSidenavModule, MatButtonModule, MatInputModule } from '@angular/material'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DefComponent } from './def/def.component';

@NgModule({
  declarations: [
    AppComponent,
    DefComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
