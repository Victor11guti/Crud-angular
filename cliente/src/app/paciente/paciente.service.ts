import { Injectable } from '@angular/core';
import { from, fromEventPattern } from 'rxjs';
import { Paciente } from './paciente';
import  {PACIENTE} from './paciente.json'
import {of} from 'rxjs'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor() {

   }

   getPacientes(): Observable<Paciente[]>{
     return of (PACIENTE);
   }
}
