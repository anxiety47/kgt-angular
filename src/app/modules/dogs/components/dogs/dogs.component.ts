import { Component, OnInit } from '@angular/core';
import { Dog } from '@app/shared/models/dog';
import { dogs } from './dogs-data';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {

  public dogs: Dog[];

  constructor() { }

  ngOnInit() {
    this.dogs = dogs;
  }

}
