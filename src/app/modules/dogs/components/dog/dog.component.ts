import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '@app/shared/models/dog';
import { Subscription } from 'rxjs';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit, OnDestroy {

  public id: string;
  public currentDog: Dog;
  private currentDogSubscription: Subscription;

  constructor(private route: ActivatedRoute, private dogsService: DogsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.currentDogSubscription = this.dogsService.currentDog$.subscribe((dog: Dog) => this.currentDog = dog);
    this.dogsService.getDogById(this.id);
  }

  ngOnDestroy() {
    this.currentDogSubscription.unsubscribe();
  }
}
