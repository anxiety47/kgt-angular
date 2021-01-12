import { Dog } from "@app/shared/models/dog";
import { Action } from "@ngrx/store";

export class SetDogs implements Action {
  public readonly type = '[dogs] setDogs';

  constructor(public dogs: Dog[]) {}
}

export type DogActions = SetDogs;