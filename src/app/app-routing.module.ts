import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UniversitySearchComponent } from './components/university-search/university-search.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { ProductPaginationComponent } from './components/product-pagination/product-pagination.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { UniversitySearchComponentModule } from './components/university-search/university-search.component-module';
import { UniversityServiceModule } from './services/university.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { ProductPaginationComponentModule } from './components/product-pagination/product-pagination.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'product-search', component: ProductListComponent },
    { path: 'search-universities', component: UniversitySearchComponent },
    { path: 'crypto-autocomplete', component: CryptoListComponent },
    { path: 'product-pagination', component: ProductPaginationComponent }
  ]), ProductListComponentModule, ProductServiceModule, UniversitySearchComponentModule, UniversityServiceModule, CryptoListComponentModule, CryptoServiceModule, ProductPaginationComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
