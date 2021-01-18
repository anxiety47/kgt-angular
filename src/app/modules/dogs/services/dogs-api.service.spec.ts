import { TestBed } from '@angular/core/testing';
import { DogsApiService } from './dogs-api.service';

describe('DogsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DogsApiService = TestBed.get(DogsApiService);
    expect(service).toBeTruthy();
  });
});
