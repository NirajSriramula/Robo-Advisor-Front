import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';

import {MatDialogModule} from "@angular/material/dialog";
@NgModule({
  declarations: [NavbarComponent,  CoreComponent],
  imports: [CommonModule, ReactiveFormsModule,CoreRoutingModule, MatDialogModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
