import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DogsEffects } from "./effects";
import { dogsReducer } from "./reducer";

@NgModule({
    imports: [
      StoreModule.forFeature('dogs', dogsReducer),
      EffectsModule.forFeature([DogsEffects])
    ],
    exports: [],
  })
  
  export class DogsStoreModule{}