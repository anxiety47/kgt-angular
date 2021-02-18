import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './components/dogs-list/dogs-list.component';
import { DogsStoreModule } from './store/dogs-store.module';
import { DogsService } from './services/dogs.service';
import { DogsApiService } from './services/dogs-api.service';
import { DogsListCardComponent } from './components/dogs-list/dogs-list-card/dogs-list-card.component';
import { RouterModule } from '@angular/router';
import { DogComponent } from './components/dog/dog.component';

@NgModule({
  declarations: [DogsComponent, DogsListCardComponent, DogComponent],
  imports: [
    CommonModule,
    DogsStoreModule,
    RouterModule
  ],
  providers: [
    DogsService,
    DogsApiService
  ]
})
export class DogsModule { }
