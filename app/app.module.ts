import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FirstchildComponent } from './firstchild/firstchild.component';
import { SecondchildComponent } from './secondchild/secondchild.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FirstchildComponent,
    SecondchildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
