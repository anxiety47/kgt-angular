import { dogsReducer } from "@app/modules/dogs/store/reducer";
import { DogsState } from "@app/modules/dogs/store/state";

export interface AppState {
  dogs: DogsState;
}

export const appReducer = {
  dogs: dogsReducer
}