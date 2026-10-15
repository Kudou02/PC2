import { Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: '', component: ReportComponent },
  { path: 'detalle/:id', component: DetailComponent },
  { path: '**', redirectTo: '' },
];