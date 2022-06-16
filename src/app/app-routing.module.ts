import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { HasRoleGuard } from './has-role.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'core',
    loadChildren: () =>
      import('../app/core/core.module').then((m) => m.CoreModule),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () =>
    import('../app/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard, HasRoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
