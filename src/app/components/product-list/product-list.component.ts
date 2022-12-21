import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, debounceTime, map } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  private _startsWithSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  // public startsWith$: Observable<string> = this._startsWithSubject.asObservable();
  // readonly list$: Observable<ProductModel[]> = this.startsWith$.pipe(switchMap(data => this._productService.getAll(data)));
  public startsWith$: Observable<string> = this.search.valueChanges.pipe(
    map(form => form.title),
    debounceTime(1000)
  )

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.startsWith$
  ]).pipe(map(
    ([products, startsWith]: [ProductModel[], string]) => {
      if (!startsWith) return [];

      return products.filter(product => {
        return product.title.startsWith(startsWith);
      })
    }
  ));

  constructor(private _productService: ProductService) {
  }

  onSearchSubmitted(search: FormGroup): void {
    this._startsWithSubject.next(search.get('title')?.value);
  }
}
