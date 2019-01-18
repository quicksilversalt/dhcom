import { Component, OnInit } from '@angular/core';

import { PaintingsService } from 'src/app/shared/paintings.service';
import { Paintings } from 'src/app/shared/paintings.model';

@Component({
  selector: 'app-static-art',
  templateUrl: './static-art.component.html',
  styleUrls: ['./static-art.component.css']
})
export class StaticArtComponent implements OnInit {
  paintingList: Paintings[];
  currentPainting: Paintings;
  currentNavItem: number;

  constructor( private paintingsService:PaintingsService ) { }

  ngOnInit() {
    this.paintingList = this.paintingsService.getAllPaintings();
    //console.log(this.paintingList);

    let result = this.paintingList.filter(obj => {
      return +obj.id === 1
    });
    
    this.currentPainting = result[0];
    this.currentNavItem = 0;
    //console.log(this.currentPainting);
  }

  showCurrentImage(id:number){
    let result = this.paintingList.filter(obj => {
      return +obj.id === id
    });
    this.currentPainting = result[0];
    this.currentNavItem = id - 1;//id is non zero'd
  }

  onSelected(e:Event, p:Paintings){
    this.showCurrentImage(+p.id);
  }

}
