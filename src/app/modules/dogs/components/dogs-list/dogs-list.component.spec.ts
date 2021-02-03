
import { Component, Injectable, Input } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { Dog } from '@app/shared/models/dog';
import { Observable, of } from 'rxjs';
import { DogsService } from '../../services/dogs.service';
import { DogsComponent } from './dogs-list.component';

// TODO: move mocks to separate files
@Injectable()
class DogsServiceMock {
  dogs$: Observable<Dog[]> = of();

  public getAllDogs(): void {}
}

@Component({
  selector: 'app-dogs-list-card',
  template: '<p>Mock for DogsListCardComponent</p>'
})
class DogsListCardComponentMock {
  @Input() dog: Dog;
}

describe('DogsComponent', () => {
  let component: DogsComponent;
  let fixture: ComponentFixture<DogsComponent>;
  let dogsService: DogsService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsComponent, DogsListCardComponentMock ],
      providers: [ 
        { provide: DogsService, useClass: DogsServiceMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsComponent);
    dogsService = TestBed.get(DogsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call function from service that gets all dogs', () => {
    const getAllDogsSpy = spyOn(dogsService, 'getAllDogs');
    component.ngOnInit();
    expect(getAllDogsSpy).toHaveBeenCalled();
  });
});
