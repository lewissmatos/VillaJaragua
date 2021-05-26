import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-streets',
  templateUrl: './streets.component.html',
  styleUrls: ['./streets.component.scss']
})
export class StreetsComponent implements OnInit {

  constructor(private data: DataService) {
    this.getAllStreets()
  }
  
  ngOnInit(): void {
  }

  streets: any = []
  
  noInternet = false
  
  getAllStreets() {
    this.data.getAllStreets().subscribe(
      res => {
        this.streets = res.data

        setTimeout(() => {
          this.noInternet = true
        }, 3000)
        
      }, error => {
        console.log(error)

        setTimeout(() => {
          this.noInternet = true
        }, 3000)
      }
    )
  }
}
