import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksVersionsRoutingModule } from './books-versions-routing.module';
import { BooksVersionsComponent } from './books-versions/books-versions.component';


@NgModule({
  declarations: [
    BooksVersionsComponent
  ],
  imports: [
    CommonModule,
    BooksVersionsRoutingModule
  ]
})
export class BooksVersionsModule { }
