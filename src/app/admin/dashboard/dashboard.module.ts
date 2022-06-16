import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';


import {MatGridTile} from '@angular/material/grid-list'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NgChartsModule,MatGridTile,
  ]
})
export class StatsModule { }
