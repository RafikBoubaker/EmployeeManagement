import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
  ],
  providers: [EmployeeService],
})
export class EmployeeModule { }
