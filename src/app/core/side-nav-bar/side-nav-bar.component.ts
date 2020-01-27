import { Component, OnInit } from '@angular/core';
import { SideNavBarService } from '../services/side-nav-bar.service';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

  isMenuShown = false;

  constructor(private sidenavbarService: SideNavBarService) { }

  ngOnInit() {
    this.sidenavbarService.isMenuVisible.subscribe(isMenuShown => {
      if (isMenuShown) {
        document.getElementById('menu-content').classList.add('menu-visible');
        document.getElementById('menu-content').classList.remove('menu-hidden');
      } else {
        document.getElementById('menu-content').classList.remove('menu-visible');
        document.getElementById('menu-content').classList.add('menu-hidden');

      }
    });
  }
}
