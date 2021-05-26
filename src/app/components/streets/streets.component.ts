import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-streets',
  templateUrl: './streets.component.html',
  styleUrls: ['./streets.component.scss']
})
export class StreetsComponent implements OnInit {

  constructor(private data: DataService, private breakpointObserver: BreakpointObserver) {
    this.getAllStreets()

    //Breakpoint to cheange search icon
    this.breakpointObserver
      .observe(['(max-width: 600px)'])
      .subscribe((state: BreakpointState ) => {
        if (state.matches) {
          this.searchIcon = true          
        } else {
          this.searchIcon = false
        }
      });
  }
  searchIcon = false
  
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
        }, 5000)
        
      }, error => {
        console.log(error)        
      }
    )
  }

  streetsFiltered = []
  
  search(word: string) {
    this.streetsFiltered = this.streets.filter((x: any) => {
      return x.name.toLowerCase().includes(word.toLowerCase())
    } )
  }
}
