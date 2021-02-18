import { AppState } from "@app/store/state";
import { createSelector } from "@ngrx/store";
import { DogsState } from "./state";

export const getAllDogsSelector = createSelector(( state: AppState ) => state.dogs, (dogsState: DogsState) => dogsState.dogs );