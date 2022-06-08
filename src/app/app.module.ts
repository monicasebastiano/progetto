import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDogComponent } from './component-dog/component-dog.component';
import { ComponentCatComponent } from './component-cat/component-cat.component';
import { ComponentHamsterComponent } from './component-hamster/component-hamster.component';
import { ComponentParotComponent } from './component-parot/component-parot.component';
import { ComponentRabbitComponent } from './component-rabbit/component-rabbit.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDogComponent,
    ComponentCatComponent,
    ComponentHamsterComponent,
    ComponentParotComponent,
    ComponentRabbitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
