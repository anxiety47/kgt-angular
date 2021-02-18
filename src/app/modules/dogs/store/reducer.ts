import { DogActions } from "./actions";
import { DogsState, initialDogState } from "./state";

export function dogsReducer(state: DogsState = initialDogState, action: DogActions): DogsState {
  if (!action) return state;
  switch (action.type) {
    case '[dogs] setAllDogs':
      return {
        ...state,
        dogs: action.dogs
      };
    case '[dogs] getAllDogs':
      return { 
        ...state, 
        ongoingActions: [ ...state.ongoingActions, action.type ]
      };
    default:
      return state;
  }
}