import { Component, OnInit } from '@angular/core';

import {Paciente} from './pacientes'
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  pacientes  : Paciente[] =[
    {id:2,
      nombres: 'asdasd',
      apellidos: 'asd',
      fecha_nacimiento: 'aaa',
      tipo_de_documento: 'aa',
      numero_documento:123445 ,
      teléfono: 123456
    },{
      id:1,
            nombres: 'asdasd',
    apellidos: 'asd',
    fecha_nacimiento: 'aaa',
    tipo_de_documento: 'aa',
    numero_documento:123445 ,
    teléfono: 123456
  },{id:3,
    nombres: 'asdasd',
  apellidos: 'asd',
  fecha_nacimiento: 'aaa',
  tipo_de_documento: 'aa',
  numero_documento:123445 ,
  teléfono: 123456
}
]

  
  constructor() { }
    
  ngOnInit(): void {
  }

}
