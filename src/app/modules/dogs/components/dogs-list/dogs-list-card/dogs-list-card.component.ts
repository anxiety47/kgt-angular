import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DogBasicData } from '@app/shared/models/dog';

@Component({
  selector: 'app-dogs-list-card',
  templateUrl: './dogs-list-card.component.html',
  styleUrls: ['./dogs-list-card.component.css']
})
export class DogsListCardComponent implements OnInit {

  @Input() dog: DogBasicData;
  
  constructor() { }

  ngOnInit() { }
}
