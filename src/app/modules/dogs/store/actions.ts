import { Dog, DogBasicData } from "@app/shared/models/dog";
import { Action } from "@ngrx/store";

export class GetAllDogsAction implements Action {
  public readonly type = '[dogs] getAllDogs';

  constructor() {}
}

export class SetAllDogsAction implements Action {
  public readonly type = '[dogs] setAllDogs';

  constructor(public dogs: DogBasicData[]) {}
}

export class GetDogByIdAction implements Action {
  public readonly type = '[dogs] getDogById';

  constructor(public id: string) {}
}

export class SetCurrentDogAction implements Action {
  public readonly type = '[dogs] setCurrentDog';

  constructor(public dog: Dog) {}
}

export type DogActions = SetAllDogsAction | GetAllDogsAction | GetDogByIdAction| SetCurrentDogAction;
