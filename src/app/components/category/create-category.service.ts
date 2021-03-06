import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class CreateCategoryService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
  })
  }
};

export class DeleteCategoryService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'x',{
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
  })
  }
}