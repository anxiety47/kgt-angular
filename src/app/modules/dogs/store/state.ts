import { Dog } from "@app/shared/models/dog";

export interface DogsState {
  dogs: Dog[];
}

export const initialDogState: DogsState = {
  dogs: []
}