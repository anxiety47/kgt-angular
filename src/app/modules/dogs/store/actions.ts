import { Dog } from "@app/shared/models/dog";
import { Action } from "@ngrx/store";

export class SetAllDogs implements Action {
  public readonly type = '[dogs] setAllDogs';

  constructor(public dogs: Dog[]) {}
}

export class GetAllDogs implements Action {
  public readonly type = '[dogs] getAllDogs';

  constructor() {}
}

export type DogActions = SetAllDogs | GetAllDogs;
