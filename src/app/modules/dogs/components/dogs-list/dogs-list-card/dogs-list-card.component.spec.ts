import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DogLevel } from '@app/shared/models/dog';
import { DogsListCardComponent } from './dogs-list-card.component';

// TODO: move to separate file
const testDog = {
  "id": 1,
  "name": "dog",
  "breed": "",
  "dateOfBirth": new Date(),
  "level": DogLevel.Advanced,
  "workmode": "",
  "notes": ""
};

describe('DogsListCardComponent', () => {
  let component: DogsListCardComponent;
  let fixture: ComponentFixture<DogsListCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsListCardComponent ],
      imports: [ RouterTestingModule ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsListCardComponent);
    component = fixture.componentInstance;
    component.dog = testDog;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
