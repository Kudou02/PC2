import { Component, inject } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [AsyncPipe, DecimalPipe, RouterLink],
  template: `
    <h2>Reporte de estudiantes</h2>

    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Nota 1</th>
          <th>Nota 2</th>
          <th>Nota 3</th>
          <th>Sumatoria</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        @for (s of students$ | async; track s.id) {
          <tr>
            <td>{{ s.nombre }}</td>
            <td>{{ s.nota1 }}</td>
            <td>{{ s.nota2 }}</td>
            <td>{{ s.nota3 }}</td>
            <td>{{ s.sumatoria }}</td>
            <td>
              <button [routerLink]="['/detalle', s.id]">Detalle</button>
            </td>
          </tr>
        }
      </tbody>
    </table>
  `,
  styles: [`
    table { border-collapse: collapse; width: 100%; max-width: 800px; }
    th, td { border: 1px solid #ccc; padding: 8px 12px; text-align: center; }
    th { background: #1f4e79; color: #fff; }
    tr:nth-child(even) { background: #f5f5f5; }
    button { cursor: pointer; padding: 4px 12px; }
  `],
})
export class ReportComponent {
  students$ = inject(StudentService).getReport();
}