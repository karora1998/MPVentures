import { Component } from '@angular/core';
import { faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
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

}
