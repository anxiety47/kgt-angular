import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavBarService {

  private _isMenuVisible = new BehaviorSubject(false);
  isMenuVisible = this._isMenuVisible.asObservable();

  constructor() { }

  toggleMenu() {
    this._isMenuVisible.next(!this._isMenuVisible.value);
  }
}
