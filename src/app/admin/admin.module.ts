import { MatGridListModule } from '@angular/material/grid-list';
import { DashBoardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorQuestionnaireComponent } from './investor_questionnaire/investor_questionnaire.component';

import { MatCardModule } from '@angular/material/card';

import { NgxPaginationModule } from 'ngx-pagination';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TypeComponent } from './dashboard/type/type.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog'
import { PortfolioComponent } from './dashboard/portfolio/portfolio.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashBoardComponent,
    PortfolioComponent,
    InvestorQuestionnaireComponent,
    TypeComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatGridListModule,
    AdminRoutingModule,
    CoreModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class AdminModule {}
