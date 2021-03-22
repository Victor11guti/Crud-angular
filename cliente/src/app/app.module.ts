import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component'
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PacienteComponent } from './paciente/paciente.component';
import {MatInputModule} from '@angular/material/input';
import {PacienteService} from './paciente/paciente.service';
import {RouterModule,Routes} from '@angular/router'


const routes: Routes =[
  {path:'clientes',component:PacienteComponent}
]





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    PacienteComponent,
    
    
  ],
  imports: [
    BrowserModule, 
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,MatTableModule, 
    MatInputModule,
   MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
