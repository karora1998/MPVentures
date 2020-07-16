import { Component, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  animations: [
  	trigger('openClose', [
        transition('closed => open', [
            style({ opacity: 0, transform: 'translateY(-30px)'}),
            animate('150ms ease-out',
                style({opacity: '*', transform: 'translateY(0)'}))
        ]),
        transition('open => closed', [
            style({ opacity: '*', transform: 'translateY(0)'}),
            animate('150ms ease-out',
                style({opacity: 0, transform: 'translateY(-30px)'}))
        ])
    ])
  ]
})
export class HeaderComponent implements OnChanges {
  isAuthenticated: boolean = false;
  faUserPlus = faUserPlus;
  faShoppingCart = faShoppingCart;
  isOpen: boolean = false;
  name: string = 'User';
  @ViewChild('myDropDown') dropdown: ElementRef;

  ngOnChanges() {
    
  }

  openChange() {
    if(!this.dropdown.nativeElement.classList.contains('show'))
      this.isOpen = false;
    // else
    //   this.isOpen = true;
    this.isOpen = !this.isOpen;
  }

  onCartClicked() {

  }

  onSignIn() {
  	this.isAuthenticated = true;
  }

}
