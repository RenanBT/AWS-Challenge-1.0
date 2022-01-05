import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceCreateComponent } from './components/devices/device-create/device-create.component';
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
  {
    path: "device/create", component: DeviceCreateComponent
  },
  {
    path: "category/create", component: CategoryCreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/**/

