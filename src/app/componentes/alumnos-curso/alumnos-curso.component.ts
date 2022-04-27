import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/model/Alumno';
import { Curso } from 'src/app/model/Curso';
import { AlumnosService } from "src/app/service/AlumnosService"

@Component({
    selector: 'app-alumnos-curso',
    templateUrl: './alumnos-curso.component.html',
    styleUrls: ['./alumnos-curso.component.css']
  })
export class AlumnosCursoComponent implements OnInit {
    
    alumnos : Alumno[]
    cursos : Curso[]
    curso : string

    constructor(private route : Router, private service : AlumnosService) {
        this.service.buscarCursos().subscribe(data => this.cursos = data)
    }

    busquedaAlumnosCurso() {
        this.service.buscarAlumnosCurso(this.curso).subscribe(data => this.alumnos = data)
    }

    ngOnInit(): void {
    }

    
}