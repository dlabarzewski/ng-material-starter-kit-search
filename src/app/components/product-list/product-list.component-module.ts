import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatOptionModule],
  declarations: [ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListComponentModule {
}
