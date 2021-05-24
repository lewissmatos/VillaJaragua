import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sector-card',
  templateUrl: './sector-card.component.html',
  styleUrls: ['./sector-card.component.scss']
})
export class SectorCardComponent implements OnInit {

  constructor() {
  }
  
  ngOnInit(): void {
  }

  //Input data from @SectorComponent
  @Input() public sectorData: any = {}

}
