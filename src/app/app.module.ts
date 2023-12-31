import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule, NgModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]

})
export class AppModule { }
