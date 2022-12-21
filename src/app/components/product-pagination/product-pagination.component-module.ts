import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductPaginationComponent } from './product-pagination.component';

@NgModule({
  imports: [ReactiveFormsModule, MatCardModule, MatListModule, CommonModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatButtonModule],
  declarations: [ProductPaginationComponent],
  providers: [],
  exports: [ProductPaginationComponent]
})
export class ProductPaginationComponentModule {
}
