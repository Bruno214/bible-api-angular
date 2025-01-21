import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksVersionsRoutingModule } from './books-versions-routing.module';
import { BooksVersionsComponent } from './books-versions/books-versions.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [
    BooksVersionsComponent
  ],
  imports: [
    CommonModule,
    BooksVersionsRoutingModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class BooksVersionsModule { }
