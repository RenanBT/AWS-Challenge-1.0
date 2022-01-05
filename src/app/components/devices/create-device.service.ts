import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import {Device} from './device.model'
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateDeviceService {
  baseUrl = "http://localhost:3001/devices";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: isError ? ["msg-error"] : ["msg-success"],
  });
  }

  create(device: Device): Observable<Device> {
    return this.http.post<Device>(this.baseUrl, device).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    }

    errorHandler(e: any): Observable<any> {
      this.showMessage("Ocorreu um erro!", true);
      return EMPTY;
    }

};


