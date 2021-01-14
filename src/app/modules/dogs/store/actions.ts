import { Dog } from "@app/shared/models/dog";
import { Action } from "@ngrx/store";

export class SetDogs implements Action {
  public readonly type = '[dogs] setDogs';

  constructor(public dogs: Dog[]) {}
}

export class GetDogs implements Action {
  public readonly type = '[dogs] getDogs';

  constructor() {}
}

export type DogActions = SetDogs | GetDogs;
