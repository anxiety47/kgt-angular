import { DogBasicData, DogLevel } from "@app/shared/models/dog";

export interface DogsState {
  dogs: DogBasicData[];
  ongoingActions: string[];
}

export const initialDogState: DogsState = {
  dogs: [],
  ongoingActions: []
}