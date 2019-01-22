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
      return +obj.id === 0
    });
    
    this.currentPainting = result[0];
    this.currentNavItem = 0;
    //console.log(this.currentPainting);
  }

  showCurrentImage(id:number){
    //console.log('trying to show ' + id);
    let result = this.paintingList.filter(obj => {
      return +obj.id === id
    });
    this.currentPainting = result[0];
    this.currentNavItem = id;
  }

  onSelected(e:Event, p:Paintings, indx:number){
    console.log(p.id);
    console.log('index is ' + indx);
    this.showCurrentImage(+p.id);
  }

  handleBackClick(){
    //console.log('curnavitem is ' + this.currentNavItem);
    const newIndex = this.currentNavItem - 1;
    if(newIndex < 0){
      this.showCurrentImage(this.paintingList.length - 1);
    } else {
      this.showCurrentImage(newIndex);
    }
  }
  handleNextClick(){
    const newIndex = this.currentNavItem + 1;
    if(newIndex >= this.paintingList.length) {
      //console.log('too long ');
      this.showCurrentImage(0);
    } else {
      this.showCurrentImage(newIndex);
    }
  }

}
