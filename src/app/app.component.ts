import { Component, OnInit } from '@angular/core';
import { SideNavBarService } from './core/services/side-nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kgt-angular';
  isMenuShown = false;

  constructor(private sidenavbarService: SideNavBarService) { }

  ngOnInit() {
    this.sidenavbarService.isMenuVisible.subscribe(data => this.isMenuShown = data);
  }
}
