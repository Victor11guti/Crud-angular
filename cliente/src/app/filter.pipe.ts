import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value :any ,arg:any): any{
   const resultadoPaciente =[];
   for(const paciente of value){
    if(paciente.nombres.toLowerCase().indexOf(arg.toLowerCase()) >-1 ){
      console.log('si');
      resultadoPaciente.push(paciente)
     
    } 
    
   }
   return resultadoPaciente;
  }

}
