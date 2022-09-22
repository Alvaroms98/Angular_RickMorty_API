import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';


interface headerAttribute {
  class: string;
  aria: string | null;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  routeState: string = '';
  home: headerAttribute;
  characters: headerAttribute;
  about: headerAttribute;

  constructor(private router: Router) {
    this.home = {
      class: "nav-link active",
      aria: "page"
    };

    this.characters = {
      class: "nav-link",
      aria: null
    };

    this.about = {
      class: "nav-link",
      aria: null
    };

  }

  ngOnInit(): void {
    this.router.events.subscribe({
      next: route => {
        if (route instanceof NavigationEnd) {
          this.routeState = route.url;
          this.setAttributes(this.routeState);
        }
      }
    });
  }

  setAttributes(page: string) {
    let selected: string = page.slice(1, page.length);
    switch (selected) {
      case 'home':
        this['home'] = {
          class: "nav-link active",
          aria: "page"
        };

        this['characters'] = {
          class: "nav-link",
          aria: null
        };

        this['about'] = {
          class: "nav-link",
          aria: null
        };
        break;
      
      case 'characters':
        this['characters'] = {
          class: "nav-link active",
          aria: "page"
        };

        this['home'] = {
          class: "nav-link",
          aria: null
        };

        this['about'] = {
          class: "nav-link",
          aria: null
        };
        break;

      case 'about':
        this['about'] = {
          class: "nav-link active",
          aria: "page"
        };

        this['characters'] = {
          class: "nav-link",
          aria: null
        };

        this['home'] = {
          class: "nav-link",
          aria: null
        };
        break;
    }
  }

}
