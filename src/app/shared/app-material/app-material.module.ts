import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  exports: [
    MatCardModule,
    MatAutocompleteModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule
  ],
})
export class AppMaterialModule { }
