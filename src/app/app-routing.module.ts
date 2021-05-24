import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectorsComponent } from './components/sectors/sectors.component';
import { StreetsComponent } from './components/streets/streets.component';
import { ViewSectorComponent } from './components/view-sector/view-sector.component';

const routes: Routes = [
  { path: 'sectors', component: SectorsComponent},
  { path: 'streets', component: StreetsComponent },
  { path: 'view/:id', component: ViewSectorComponent },
  {path:'**', pathMatch:'full', redirectTo: 'sectors'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
