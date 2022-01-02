import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './views/category/category.component';
import { DevicesComponent } from './views/devices/devices.component';
import { HomeComponent } from './views/home/home.component';
const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  { 
    path: 'devices', component : DevicesComponent
  },

  { 
    path: 'category', component: CategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/**/

