import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksVersionsComponent } from './books-versions/books-versions.component';

const routes: Routes = [
  { path: '', component: BooksVersionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksVersionsRoutingModule { }
