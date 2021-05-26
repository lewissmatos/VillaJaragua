import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.scss']
})
export class SectorsComponent implements OnInit {

  constructor(private data: DataService, private router: Router,private breakpointObserver: BreakpointObserver ) {
    //Calling method to Get all Sectors from Backend
    this.getAllSectors('desc')

    //Breakpoint to cheange search icon
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState ) => {
        if (state.matches) {
          this.searchIcon = true          
        } else {
          this.searchIcon = false
        }
      })
  }
  searchIcon =  false

  ngOnInit(): void {
  }

  
  noInternet = false
  sectors: any = []
  
  //Method to get all sectors from Backend
  getAllSectors(sort: string) {
    this.data.getAllSectors(sort).subscribe(
      res => {
        this.sectors = res.data

        if (this.sectors.length === 0) {
          //Setting warning "No internet conexion"
          setTimeout(() => {
            this.noInternet = true
          }, 5000)
        }
      }, error => {
        console.log(error)
      }
    )    
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

  sortFrom = false
  sort() {
    this.sortFrom = !this.sortFrom
    
    !this.sortFrom ? this.getAllSectors('desc') : this.getAllSectors('asc')
    
  }

}
