import { Component, OnInit } from '@angular/core';
import { faPaw, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { SideNavBarService } from '../services/side-nav-bar.service';
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

  isMenuShown = false;

  constructor(private sidenavbarService: SideNavBarService) { }

  ngOnInit() {
    this.sidenavbarService.isMenuVisible.subscribe( data => {
      this.isMenuShown = data;
      if (this.isMenuShown) {
        document.getElementById('menu-text').classList.add('menu-text-hidden');
        document.getElementById('menu-text').classList.remove('menu-text-visible');
      } else {
        document.getElementById('menu-text').classList.remove('menu-text-hidden');
        document.getElementById('menu-text').classList.add('menu-text-visible');

      }
    });
  }

  toggleMenu() {
    this.toggleMenuIcon();
    this.sidenavbarService.toggleMenu();
  }

  private toggleMenuIcon() {
    document.getElementById('menu-icon').classList.toggle('open');
  }
}
