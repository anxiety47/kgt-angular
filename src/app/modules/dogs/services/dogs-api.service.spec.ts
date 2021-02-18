import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DogsApiService } from './dogs-api.service';

describe('DogsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ DogsApiService ]
  }));

  it('should be created', () => {
    const service: DogsApiService = TestBed.inject(DogsApiService);
    expect(service).toBeTruthy();
  });
});
