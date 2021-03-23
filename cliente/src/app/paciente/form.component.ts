import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';
import { PacienteService } from './paciente.service';
import  {Router,ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'
import Swal from 'sweetalert2';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 public paciente : Paciente = new Paciente();
 public titulo :string ="Crear Paciente"

  constructor( private  pacienteservice : PacienteService,
    private router :Router,
    private activateroute : ActivatedRoute) { }
 
  ngOnInit(): void {
    this.cargarPaciente();
  }
   cargarPaciente():void {
 this.activateroute.params.subscribe(params =>{
   let id = params['id']
   if(id){
     this.pacienteservice.getPaciente(id).subscribe((paciente)=>this.paciente =paciente)
     
   }
 })
   }
  public create(): void{
    this.pacienteservice.create(this.paciente).subscribe(
      response =>
      {
      this.router.navigate(['/paciente'])
      Swal.fire('Pacientee guardado',`Paciente ${this.paciente.nombres} creado con exito`,'success')
      
    }
    )
    console.log(this.paciente);

  }

  update():void {
    this.pacienteservice.update(this.paciente).subscribe( paciente =>{
      this.router.navigate(['/paciente'])
      Swal.fire('Paciente actualizado',`Paciente ${paciente.nombres} `,'success')
    }
    )
  }
}
