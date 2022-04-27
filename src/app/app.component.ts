import { Component } from '@angular/core';
import { Alumno } from './model/Alumno';
import { Curso } from './model/Curso';
import { AlumnosService } from './service/AlumnosService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formacion';

}
