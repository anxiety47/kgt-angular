import { Dog, DogBasicData } from "@app/shared/models/dog";

export interface DogsState {
  dogs: DogBasicData[];
  ongoingActions: string[];
  currentDog: Dog;
}

export const initialDogState: DogsState = {
  dogs: [],
  ongoingActions: [],
  currentDog: null
}