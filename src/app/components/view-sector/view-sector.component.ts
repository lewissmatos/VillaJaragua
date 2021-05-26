import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-view-sector',
  templateUrl: './view-sector.component.html',
  styleUrls: ['./view-sector.component.scss']
})
export class ViewSectorComponent implements OnInit {

  constructor(private data: DataService,
    private activatedRoute: ActivatedRoute) {
      //Seting the Id to get the Sector to show
    this.getSectorById(this.activatedRoute.snapshot.params.id)
      //Seting the Id to get the Streets 
    this.getStreetsBySectorId(this.activatedRoute.snapshot.params.id)
  }
  
  ngOnInit(): void {
  }
  
  //Get sector to Show in View layout
  
  sector: any = {}
  getSectorById(id: string) {
    this.data.getSectorById(id).subscribe(
      res => this.sector = res.data
    )
  }

  //Get Streets by Sector Id

  streets:any = []
  getStreetsBySectorId(id:string) {
    this.data.getStreetsBySectorId(id).subscribe(
      res => {
        this.streets = res.data
      }
    )
  }
}
