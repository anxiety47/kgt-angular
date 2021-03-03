import { Component, OnDestroy, OnInit } from '@angular/core';
import { DogBasicData } from '@app/shared/models/dog';
import { Subscription } from 'rxjs';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})

export class DogsComponent implements OnInit, OnDestroy {

  public dogs: DogBasicData[];
  private dogsSubscription: Subscription;
  
  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.dogsSubscription = this.dogsService.dogs$.subscribe((dogs: DogBasicData[]) => this.dogs = dogs);
    this.dogsService.getAllDogs();
  }

  ngOnDestroy() {
    this.dogsSubscription.unsubscribe();
  }
}
