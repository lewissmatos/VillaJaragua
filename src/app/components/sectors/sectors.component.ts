import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {

  constructor(private data: DataService) {
    //Calling method to Get all Sectors from Backend
    this.getAllSectors()
  }

  ngOnInit(): void {
  }

  sectors: any = []
  
  //Method to get all sectors from Backend
  getAllSectors() {
    this.data.getAllSectors().subscribe(
      res => {
        this.sectors = res.data
      }
    )
  }

}
