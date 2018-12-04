import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMouseOver(data: Event) {
    // console.log(data);
    // console.log(data.target.style);
    
  }

  handleClick(id: string) {
    console.log(id);
    this.router.navigate([id]);
  }

}
