import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksVersionsRoutingModule } from './books-versions-routing.module';
import { BooksVersionsComponent } from './books-versions/books-versions.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    BooksVersionsComponent
  ],
  imports: [
    CommonModule,
    BooksVersionsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class BooksVersionsModule { }
