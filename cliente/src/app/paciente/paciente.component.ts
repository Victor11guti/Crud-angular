import { AfterViewInit, Component, ViewChild,OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
import { Paciente } from './paciente';
import {PacienteService} from './paciente.service'


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements AfterViewInit ,OnInit{
  displayedColumns: string[] = [
    'ID',
    'Nombres',
    'Apellido',
    'fecha_nacimiento',
    'tipo_documento',
    'numero_documento',
    'telefono',
  ];
  dataSource: MatTableDataSource<Paciente>;
  pacientes: Paciente[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  filterPaciente ='';
  constructor(private  pacienteService : PacienteService) {
  
  }
  ngOnInit(): void {
    this.pacienteService.getPacientes().subscribe(
      pacientes  => this.pacientes = pacientes
     );
     this.dataSource = new MatTableDataSource(this.pacientes);
    

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   
  }
}


