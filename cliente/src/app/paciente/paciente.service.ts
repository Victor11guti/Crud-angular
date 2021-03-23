import { Injectable } from '@angular/core';
import { from, fromEventPattern } from 'rxjs';
import { Paciente } from './paciente';
import  {PACIENTE} from './paciente.json'
import {of} from 'rxjs'
import {Observable,throwError} from 'rxjs'
import {map, catchError} from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import {Router} from '@angular/router'
@Injectable()
  export class PacienteService {
    private urlendPoint: string ='http://localhost:8090/api/pacientes'
    private hhtpHeaders = new HttpHeaders({'Content-type':'application/json'})
    constructor(private http: HttpClient
      ,private router : Router) {
   
      }
   
      getPacientes(): Observable<Paciente[]>{  
       return this.http.get<Paciente[]>(this.urlendPoint);
     
      }
    
      create(paciente : Paciente):Observable<any>{
        return this.http.post<Paciente>(this.urlendPoint,paciente,{headers: this.hhtpHeaders}).pipe(
          catchError(e =>{
            console.error(e.mensaje);
            Swal.fire('Erro al crear el cliente',e.error.mensaje,'error');
           return throwError(e);
            
          }));}

        
      


      getPaciente(id):Observable<Paciente>{
        return this.http.get<Paciente>(`${this.urlendPoint}/${id}`).pipe(
          catchError(e=>{
            this.router.navigate(['/paciente']);
            Swal.fire('Erros al editar', e.console.error.mensaje,'error');
            return throwError(e);
            
            
          })
        )
      }
      update(paciente: Paciente): Observable<any>{
        return this.http.put<any>(`${this.urlendPoint}/${paciente.id}`,paciente,{headers:this.hhtpHeaders}).pipe(
          catchError(e =>{
            console.error(e.mensaje);
            Swal.fire('Erro al crear el cliente',e.error.mensaje,'error');
           return throwError(e);
            
          }));
      }
   }
 


