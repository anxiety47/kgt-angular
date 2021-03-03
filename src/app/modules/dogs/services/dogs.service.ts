import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllDogsAction, GetDogByIdAction } from '../store/actions';
import { getAllDogsSelector, getCurrentDogSelector } from '../store/selectors';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  public dogs$ = this.store.select(getAllDogsSelector);
  public currentDog$ = this.store.select(getCurrentDogSelector);

  constructor(private store: Store<any>) { }

  public getAllDogs(): void {
    this.store.dispatch( new GetAllDogsAction() );

  }
  public getDogById(id: string): void {
    this.store.dispatch( new GetDogByIdAction(id) );
  }
}
