import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Alumno } from "../model/Alumno";
import { Curso } from "../model/Curso";

@Injectable({
    providedIn : 'root'
})
export class AlumnosService {

    urlAlumnos : string = 'http://localhost:8080/11_Proyecto_Formacion/Alumnos'
    urlCursos : string = "http://localhost:8080/11_Proyecto_Formacion/Cursos"
    urlAlumnosCurso : string = 'http://localhost:8080/11_Proyecto_Formacion/AlumnosCurso'
    urlCursosAlumno : string = "http://localhost:8080/11_Proyecto_Formacion/CursosAlumno"

    constructor(private http : HttpClient) {}

    buscarAlumnos() {
        return this.http.get<Alumno[]>(this.urlAlumnos);
    }

    buscarCursos() {
        return this.http.get<Curso[]>(this.urlCursos);
    }

    buscarAlumnosCurso(nombreCurso : string) {
        return this.http.get<Alumno[]>(this.urlAlumnosCurso, {params : { nombre : nombreCurso}})
    }

    buscarCursosAlumno(usuario : string) {
        return this.http.get<Curso[]>(this.urlCursosAlumno, {params : {usuario : usuario}})
    }
}