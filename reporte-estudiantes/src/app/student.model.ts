export interface Student {
  id: number;
  nombre: string;
  nota1: number;
  nota2: number;
  nota3: number;
}

export interface StudentReport extends Student {
  sumatoria: number;
  promedio: number;
  estado: 'Aprobado' | 'Desaprobado';
  observacion: 'Excelente' | 'Regular' | 'Riesgo';
}