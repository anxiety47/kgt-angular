import { DogActions } from "./actions";
import { DogsState, initialDogState } from "./state";

export function dogsReducer(state: DogsState = initialDogState, action: DogActions): DogsState {
  if (!action) return state;
  switch (action.type) {
    case '[dogs] setAllDogs':
      return {
        ...state,
        ongoingActions: state.ongoingActions.filter( action => action !== '[dogs] getAllDogs'),
        dogs: action.dogs
      };
    case '[dogs] getAllDogs':
    case '[dogs] getDogById':
      return { 
        ...state, 
        ongoingActions: [ ...state.ongoingActions, action.type ]
      };
    case '[dogs] setCurrentDog':
      return {
        ...state,
        ongoingActions: state.ongoingActions.filter( action => action !== '[dogs] getDogById'),
        currentDog: action.dog
      };
    default:
      return state;
  }
}