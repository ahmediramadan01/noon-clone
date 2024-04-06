import { Component } from '@angular/core';
import { UserRequestsService } from '../../services/user-requests.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
Router;

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.scss',
})
export class NewUserComponent {
  NewUser: any = {};
  constructor(
    private _UserRequestsService: UserRequestsService,
    private _Router: Router,
    public tost: NgToastService
  ) {}
  add() {
    console.log(this.NewUser);

    this._UserRequestsService.addNewUser(this.NewUser).subscribe({
      next: (data) => {
        console.log(data);
        this._Router.navigate(['/register']);
      },
      error: (err) => {
        console.log(err);
        this._Router.navigate(['/register']);
        this.tost.success({
          detail: 'success Message',
          summary: 'User Added successfuly',
          duration: 5000,
        });
      },
    });
  }
}
