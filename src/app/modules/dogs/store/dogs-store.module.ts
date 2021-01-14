import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { dogsReducer } from "./reducer";

@NgModule({
    imports: [
      StoreModule.forFeature('dogs', dogsReducer),
    ],
    exports: [],
  })
  
  export class DogsStoreModule{}