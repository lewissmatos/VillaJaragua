import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {

  constructor(private data: DataService) {
    this.getAllSectors()
  }

  ngOnInit(): void {
  }

  sectors:any = []

  getAllSectors() {
    this.data.getAllSectors().subscribe(
      res => {
        this.sectors = res.data
        console.log(res.data)
      }
    )
  }

}
