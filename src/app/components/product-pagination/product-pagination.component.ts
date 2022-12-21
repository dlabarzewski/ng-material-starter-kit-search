import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {combineLatest, map, Observable, of, startWith} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-pagination',
  templateUrl: './product-pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductPaginationComponent {
  // readonly list$: Observable<ProductModel[]> = this._productService.getAll();
  readonly pagination: FormGroup = new FormGroup({ page: new FormControl(1), size: new FormControl(3) });
  readonly pages: Observable<number[]> = of([1, 2, 3, 4, 5]);
  readonly sizes: Observable<number[]> = of([3, 6, 9]);

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this.pagination.valueChanges.pipe(
      startWith({
        page: 1,
        size: 3
      })
    ),
    this._productService.getAll()
  ]).pipe(
    map(([form, products] : [any, ProductModel[]]) => {
      return products.slice(((form.page - 1) * form.size), form.page * form.size);
    })
  )

  constructor(private _productService: ProductService) {
  }

  onPaginationSubmitted(pagination: FormGroup): void {
  }
}
