import { Dog } from "@app/shared/models/dog";
import { Action } from "@ngrx/store";

export class SetAllDogsAction implements Action {
  public readonly type = '[dogs] setAllDogs';

  constructor(public dogs: Dog[]) {}
}

export class GetAllDogsAction implements Action {
  public readonly type = '[dogs] getAllDogs';

  constructor() {}
}

export type DogActions = SetAllDogsAction | GetAllDogsAction;
