import { Injectable } from "@angular/core";
import { Dog } from "@app/shared/models/dog";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { DogsApiService } from "../services/dogs-api.service";
import { GetAllDogsAction, SetAllDogsAction } from "./actions";

@Injectable()
export class DogsEffects {
    constructor(private action$: Actions, private dogsApiService: DogsApiService) {}

    @Effect()
    getAllDogs$ = this.action$.pipe( ofType('[dogs] getAllDogs'), 
    
    mergeMap( (action: GetAllDogsAction) => this.dogsApiService.getAllDogs().pipe( 
      map( (data: Dog[]) => new SetAllDogsAction(data) ) ) )
    );
}