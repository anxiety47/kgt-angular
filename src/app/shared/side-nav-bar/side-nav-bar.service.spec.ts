import { TestBed } from '@angular/core/testing';

import { SideNavBarService } from './side-nav-bar.service';

describe('SideNavBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SideNavBarService = TestBed.get(SideNavBarService);
    expect(service).toBeTruthy();
  });
});
