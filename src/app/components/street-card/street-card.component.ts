import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-street-card',
  templateUrl: './street-card.component.html',
  styleUrls: ['./street-card.component.scss']
})
export class StreetCardComponent implements OnInit {

  constructor() {
  }
  
  ngOnInit(): void {
    this.getSectors()
  }

  @Input() public streetData: any = {}
  
  sectors: any= []

  getSectors() {
    this.sectors = this.streetData.sectors.map((x: any) => x)
    console.log(this.sectors);
  }
}
