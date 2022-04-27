import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnosCursoComponent } from './componentes/alumnos-curso/alumnos-curso.component';
import { CursosAlumnoComponent } from './componentes/cursos-alumno/cursos-alumno.component';

const routes: Routes = [
  {
    path : 'AlumnosCurso',
    component : AlumnosCursoComponent
  },
  {
    path : 'CursosAlumno',
    component : CursosAlumnoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
