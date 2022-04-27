import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Alumno } from "../../model/Alumno";
import { Curso } from "../../model/Curso";
import { AlumnosService } from "../../service/AlumnosService";

@Component({
    selector: 'app-cursos-alumno',
    templateUrl: './cursos-alumno.component.html',
    styleUrls: ['./cursos-alumno.component.css']
  })
export class CursosAlumnoComponent implements OnInit {

    alumnos : Alumno[]
    cursos : Curso[]
    alumno : string

    constructor(private router : Router, private service : AlumnosService) {
        this.service.buscarAlumnos().subscribe(data => this.alumnos = data)
    }

    busquedaCursosAlumno() {
        this.service.buscarCursosAlumno(this.alumno).subscribe(data => this.cursos = data)
    }

    ngOnInit(): void {
    }
}