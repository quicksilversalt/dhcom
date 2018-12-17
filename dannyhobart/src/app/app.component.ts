import { Component, OnInit } from '@angular/core';

import { Paintings } from './shared/paintings.model';
import { PaintingsService } from './shared/paintings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  paintings: Paintings[];

  constructor (private paintingsService:PaintingsService) {}

  ngOnInit() {
    //this.paintings = this.paintingsService.getAllPaintings();
    //console.log(this.paintings);
  }
  
}
