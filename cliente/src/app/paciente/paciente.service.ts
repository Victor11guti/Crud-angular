import { Injectable } from '@angular/core';
import { from, fromEventPattern } from 'rxjs';
import { Paciente } from './paciente';
import  {PACIENTE} from './paciente.json'
import {of} from 'rxjs'
import {Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
  export class PacienteService {
    private urlendPoint: string ='http://localhost:8090/api/pacientes'
    private hhtpHeaders = new HttpHeaders({'Content-type':'application/json'})
    constructor(private http: HttpClient) {
   
      }
   
      getPacientes(): Observable<Paciente[]>{  
       return this.http.get<Paciente[]>(this.urlendPoint);
     
      }
    
      create(paciente : Paciente):Observable<Paciente>{
        return this.http.post<Paciente>(this.urlendPoint,paciente,{headers: this.hhtpHeaders})
      }


      getPaciente(id):Observable<Paciente>{
        return this.http.get<Paciente>(`${this.urlendPoint}/${id}`)
      }
      update(paciente: Paciente): Observable<Paciente>{
        return this.http.put<Paciente>(`${this.urlendPoint}/${paciente.id}`,paciente,{headers:this.hhtpHeaders})
      }
   }
 


