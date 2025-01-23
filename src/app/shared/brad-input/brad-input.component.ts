import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-brad-input',
  templateUrl: './brad-input.component.html',
  styleUrl: './brad-input.component.scss'
})
export class BradInputComponent {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() versions: string[] = [];
  @Input() myControl: FormControl = new FormControl('');
  filteredVersions: string[] = this.versions.slice();
  versionSelected: boolean = false;

  filter(): void {
    const filterValue = this.input.nativeElement.value.toLowerCase();
    this.filteredVersions = this.versions.filter(o => o.toLowerCase().includes(filterValue));

    if (this.versionSelected) {
      this.filteredVersions = this.versions.slice();
      this.filteredVersions.unshift('');
    }
  }

  onOptionSelected($event: MatAutocompleteSelectedEvent) {
    const selectedValue = $event.option.value;
    if (selectedValue) {
      this.versionSelected = true;
      return;
    }
    this.versionSelected = false;
  }

}
