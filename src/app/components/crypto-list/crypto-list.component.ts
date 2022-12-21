import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoListComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoService.getAll();
  public selected: CryptoModel[] = [];
  readonly symbol: FormControl = new FormControl()

  constructor(private _cryptoService: CryptoService) {
  }

  onSelectionChange(event: any): void {
    this.selected.push(event.option.value);
  }
}
