import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllDogsAction } from '../store/actions';
import { getAllDogsSelector } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  public dogs$ = this.store.select(getAllDogsSelector);

  constructor(private store: Store<any>) { }

  public getAllDogs(): void {
    this.store.dispatch( new GetAllDogsAction() );
  }
}
