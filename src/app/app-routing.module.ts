import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SwaggerComponent } from './pages/swagger/swagger.component';
import { ReportComponent } from './pages/report/report.component';
import { ImportComponent } from './pages/importing/importing.component';


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { component: SettingsComponent, path: "excel" },
  { component: SwaggerComponent, path: "pass" },
  { component: ReportComponent, path: "reportData" },
  { component: ImportComponent, path: "import" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
