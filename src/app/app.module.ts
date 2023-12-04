import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionsMenuComponent } from './actions-menu/actions-menu.component';

import { AppComponent } from './app.component';
import { FloorOptionsComponent } from './floor-options/floor-options.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    ActionsMenuComponent,
    FloorOptionsComponent,
    FloorPlanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
