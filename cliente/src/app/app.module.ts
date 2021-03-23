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
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './paciente/form.component';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';




const routes: Routes =[
  {path:'paciente',component:PacienteComponent},
  {path:'paciente/form',component:FormComponent},
  {path:'paciente/form/:id',component:FormComponent}
]





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    PacienteComponent,
    FormComponent,
    FilterPipe,
    
    
  ],
  imports: [
    BrowserModule, HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,MatTableModule, 
    MatInputModule,
   MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
