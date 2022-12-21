import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import {debounceTime, Observable, switchMap} from 'rxjs';
import { UniversityModel } from '../../models/university.model';
import { UniversityService } from '../../services/university.service';

@Component({
  selector: 'app-university-search',
  templateUrl: './university-search.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UniversitySearchComponent {
  readonly search: FormControl = new FormControl('');

  readonly list$: Observable<UniversityModel[]> = this.search.valueChanges.pipe(
    debounceTime(1000),
    switchMap((country: string) => this._universityService.search(country))
  );

  constructor(private _universityService: UniversityService) {
  }
}
