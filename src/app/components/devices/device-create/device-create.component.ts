import { CreateDeviceService } from './../create-device.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Device} from './../device.model';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-device-create',
  templateUrl: './device-create.component.html',
  styleUrls: ['./device-create.component.css']
})
export class DeviceCreateComponent implements OnInit {
  

  device: Device = {
    color:"any",
    partNumber: NaN
  }

  constructor(private createDeviceService : CreateDeviceService, private router:Router) { }


  ngOnInit(): void {
    
  }

  createForm(device: Device){

  }


  createDevice(): void {
    this.createDeviceService.create(this.device).subscribe(() => {
    this.createDeviceService.showMessage("Device Created");
    this.router.navigate(['/devices'])
  })

}

cancel(): void {
  this.router.navigate(['/devices'])
}

}
