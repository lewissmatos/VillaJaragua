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
    //Seting the Id to get the Sector tio show
    this.getSectorById(this.activatedRoute.snapshot.params.id)
    this.getStreetsBySectorId(this.activatedRoute.snapshot.params.id)
  }

  ngOnInit(): void {
  }

  sector:any = {}

  //Get sector to Show in View layout
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
        console.log(res.data)
      }
    )
  }
}
