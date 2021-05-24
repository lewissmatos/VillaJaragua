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

  
  noInternet = false
  sectors: any = []
  
  //Method to get all sectors from Backend
  getAllSectors() {
    this.data.getAllSectors().subscribe(
      res => {
        this.sectors = res.data
      }
    )
    
    //Setting warning "No internet conexion"
    if (this.sectors.length == 0) {
      setTimeout(() => {
        this.noInternet = true
      }, 4000)
    }
  }

  //Search Method

  filteredSectors:any = []
  search(word:string) {
    this.filteredSectors = this.sectors.filter(
      (x: any) => {
        return x.name.toLowerCase().includes(word.toLowerCase())
      }
    )
  }

}
