import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveModule } from './reactive/reactive.module';
import { FetchModule } from './fetch/fetch.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveModule,
    ReactiveFormsModule,
    FetchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
