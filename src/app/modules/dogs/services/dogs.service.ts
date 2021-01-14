import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDogs } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  public dogs$ = this.store.select(getDogs);

  constructor(private store: Store<any>) { }

}
