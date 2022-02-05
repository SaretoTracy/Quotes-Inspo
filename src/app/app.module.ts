import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteeComponent } from './quotee/quotee.component';
import { QuoteeDetailComponent } from './quotee-detail/quotee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteeComponent,
    QuoteeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
