import { Component, OnDestroy, OnInit } from '@angular/core';
import { Dog } from '@app/shared/models/dog';
import { Subscription } from 'rxjs';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit, OnDestroy {

  public dogs: Dog[];
  private dogsSubscription: Subscription;
  
  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.dogsSubscription = this.dogsService.dogs$.subscribe( (dogs: Dog[]) => {
      this.dogs = dogs;
    });
    this.dogsService.getAllDogs();
  }

  ngOnDestroy() {
    this.dogsSubscription.unsubscribe();
  }
}
