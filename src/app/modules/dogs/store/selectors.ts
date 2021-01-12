import { Dog } from "@app/shared/models/dog";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { DogsState } from "./state";

const state = createFeatureSelector<DogsState>('dogs');

export const getDogs = createSelector<object, DogsState, Dog[]>( state, (dogsState: DogsState) => dogsState.dogs );