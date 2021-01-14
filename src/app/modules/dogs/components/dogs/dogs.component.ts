import { Component, OnInit } from '@angular/core';
import { Dog } from '@app/shared/models/dog';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {

  public dogs: Dog[];

  constructor(private dogsService: DogsService) { }

  ngOnInit() {
    this.dogsService.dogs$.subscribe( (dogs: Dog[]) => {
      this.dogs = dogs;
    });
  }
}
