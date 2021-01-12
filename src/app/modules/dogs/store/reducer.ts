import { Action } from "rxjs/internal/scheduler/Action";
import { DogActions } from "./actions";
import { DogsState, initialDogState } from "./state";

export function dogsReducer(state: DogsState = initialDogState, action: DogActions): DogsState {
  if (!action) return state;
  switch (action.type) {
    case '[dogs] setDogs':
      return { ...state, dogs: action.dogs };
    default:
      return state;
  }
}