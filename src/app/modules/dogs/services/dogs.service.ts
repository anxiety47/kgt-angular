import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllDogs } from '../store/actions';
import { getAllDogs } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  public dogs$ = this.store.select(getAllDogs);

  constructor(private store: Store<any>) { }

  public getAllDogs(): void {
    this.store.dispatch( new GetAllDogs() );
  }
}
