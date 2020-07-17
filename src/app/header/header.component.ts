import { Component } from '@angular/core';
import { faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated: boolean = false;
  faUserPlus = faUserPlus;
  faShoppingCart = faShoppingCart;
  isOpen: boolean = false;
  name: string = 'User';

  onCartClicked() {
    console.log("Hello")
  }

  onSignIn() {
  	this.isAuthenticated = true;
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('bg-light');
    } else {
      element.classList.remove('bg-light');
    }
  }

}
