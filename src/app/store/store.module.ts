import { NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
  ],
  exports: [],
})

export class AppStoreModule{}