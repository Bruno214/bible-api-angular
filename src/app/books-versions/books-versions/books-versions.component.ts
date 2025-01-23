import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-books-versions',
  templateUrl: './books-versions.component.html',
  styleUrl: './books-versions.component.scss'
})
export class BooksVersionsComponent {
  myControl = new FormControl('');
  versions: string[] = ['AML (Almeida Corrigida)', 'KJ King James)', 'teste', 'maça', 'batata', 'bola'];
}
