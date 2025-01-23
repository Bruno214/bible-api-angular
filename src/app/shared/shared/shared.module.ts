import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { BradInputComponent } from '../brad-input/brad-input.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BradInputComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [
    AppMaterialModule,
    BradInputComponent
  ]
})
export class SharedModule { }
