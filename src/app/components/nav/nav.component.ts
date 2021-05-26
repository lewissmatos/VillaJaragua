import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private router: Router) {
    this.checkRoute()
  }

  showSectors = true

  //Method to navigate on "sectors" or "streets"
  navigate() {
    let route = this.router.url
    
    if (route === '/sectors') {
      this.router.navigate(['/streets'])
      this.showSectors = true
    }
    
    if (route === '/streets') {
      this.router.navigate(['/sectors'])
      this.showSectors = false
    }
    
  }

  checkRoute() {
    let route = this.router.url

    if (route === '/sectors') {
      this.showSectors = true
    }
    
    if (route === '/streets') {
      this.showSectors = false
    }
  }

}
