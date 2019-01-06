import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  public mobile: boolean = false;
  public showMenu: boolean = true;
  public innerWidth: any;
  public currentURLState: string;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        console.log("current url",event.url); // event.url has current url
        // TODO: there has to be a better way to do this
        switch (event.url){
          case "/" :
            this.currentURLState = "home";
          break;
          case "/static-art":
            this.currentURLState = "static";
          break;
          case "/motion-art":
            this.currentURLState = "motion";
          break;
          case "/online-art":
            this.currentURLState = "online";
          break;
          case "/writing":
            this.currentURLState = "writing";
          break;
          case "/exhibitions":
            this.currentURLState = "exhibitions";
          break;
        }
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event){
    this.innerWidth = event.target.innerWidth;
    this.setWidthPrefs(this.innerWidth);
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.setWidthPrefs(this.innerWidth);
  }

  onMouseOver(data: Event) {
    // console.log(data);
    // console.log(data.target.style);
    
  }

  setWidthPrefs(width: number) {
    if (width < 781) {
      this.mobile = true;
      this.showMenu = false;
    } else {
      this.mobile = false;
      this.showMenu = true;
    }
  }

  handleClick(id: string) {
    if(id === 'home') {
      id = '';
    }
    console.log(id);
    this.router.navigate([id]);
  }

  mobileMenuToggle() {
    this.showMenu = !this.showMenu;
  }

}
