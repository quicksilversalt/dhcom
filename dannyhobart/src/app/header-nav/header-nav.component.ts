import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  public mobile = false;
  public showMenu: boolean = true;
  public innerWidth: any;

  constructor(private router: Router) { }

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
