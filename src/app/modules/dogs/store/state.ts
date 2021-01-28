import { Dog, DogLevel } from "@app/shared/models/dog";

export interface DogsState {
  dogs: Dog[];
  ongoingActions: string[];
}

export const initialDogState: DogsState = {
  dogs: [],
  ongoingActions: []
}