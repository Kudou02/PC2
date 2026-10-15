import { Component, inject } from '@angular/core';
import { AsyncPipe, DecimalPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [AsyncPipe, DecimalPipe, RouterLink],
  template: `
    @if (student$ | async; as s) {
      <h2>Detalle de {{ s.nombre }}</h2>

      <div class="card">
        <p><strong>Promedio:</strong> {{ s.promedio | number: '1.2-2' }}</p>
        <p>
          <strong>Estado:</strong>
          <span [class]="s.estado === 'Aprobado' ? 'ok' : 'bad'">{{ s.estado }}</span>
        </p>
        <p><strong>Observación:</strong> {{ s.observacion }}</p>
      </div>
    } @else {
      <p>Cargando o estudiante no encontrado...</p>
    }

    <button routerLink="/">← Volver al reporte</button>
  `,
  styles: [`
    .card { border: 1px solid #ccc; border-radius: 8px; padding: 16px; max-width: 350px; margin-bottom: 16px; }
    .ok { color: green; font-weight: bold; }
    .bad { color: red; font-weight: bold; }
    button { cursor: pointer; padding: 6px 14px; }
  `],
})
export class DetailComponent {
  private route = inject(ActivatedRoute);
  private service = inject(StudentService);

  student$ = this.service.getById(Number(this.route.snapshot.paramMap.get('id')));
}