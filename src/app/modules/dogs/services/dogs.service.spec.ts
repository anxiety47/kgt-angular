import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { GetAllDogs } from '../store/actions';
import { DogsService } from './dogs.service';

describe('DogsService', () => {
  let store: Store<any>;
  let dogsService: DogsService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
    });

    store = TestBed.get(Store);
    dogsService = TestBed.get(DogsService);
  });

  it('should be created', () => {
    const service: DogsService = TestBed.get(DogsService);
    expect(service).toBeTruthy();
  });

  it('should dispatch action that gets all dogs data', () => {
    let tmp = spyOn(store, 'dispatch');
    dogsService.getAllDogs();
    expect(tmp).toHaveBeenCalledWith( new GetAllDogs() );
  });
});
