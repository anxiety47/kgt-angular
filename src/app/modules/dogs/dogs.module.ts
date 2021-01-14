import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogsStoreModule } from './store/dogs-store.module';
import { DogsService } from './services/dogs.service';

@NgModule({
  declarations: [DogsComponent],
  imports: [
    CommonModule,
    DogsStoreModule
  ],
  providers: [
    DogsService
  ]
})
export class DogsModule { }
