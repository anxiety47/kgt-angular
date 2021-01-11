import { Component, OnInit } from '@angular/core';
import { faPaw, faDog } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faMap } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // faMenuIcon = faBars;
  faKgtIcon = faPaw;
  faFbIcon = faFacebook;
  faInstagramIcon = faInstagram;

  faDogsIcon = faDog;
  faTrainingsIcon = faMap;
  faEventsIcon = faCalendarAlt;

  constructor(private router: Router) { }

  ngOnInit() {}

  login(): void {
    this.router.navigate(['/login-form'], {queryParams: {returnUrl: this.router.url}});
  }
}
