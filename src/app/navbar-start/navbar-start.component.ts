import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-navbar-start',
  templateUrl: './navbar-start.component.html',
  styleUrls: ['./navbar-start.component.css']
})
export class NavbarStartComponent {
  navbg: any;

  @HostListener('document: scroll')
  scrollover() {
    console.log(document.body.scrollTop, "scrolllength#");
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.navbg = {
        'background-color': 'rgba(0,0,0,0.25)'
      }
    } else {
      this.navbg = {}
    }
  }
}
