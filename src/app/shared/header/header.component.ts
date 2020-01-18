import { Component, OnInit } from '@angular/core';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { SideNavBarService } from '../side-nav-bar/side-nav-bar.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faMenuIcon = faBars;
  faKgtIcon = faPaw;
  faFbIcon = faFacebook;
  faInstagramIcon = faInstagram;

  constructor(private sidenavbarService: SideNavBarService) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.sidenavbarService.toggleMenu();
  }
}
