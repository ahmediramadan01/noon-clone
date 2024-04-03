import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserRequestsService } from '../../services/user-requests.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.scss',
})
export class RegComponent implements OnInit {
  user: any;
  constructor(
    private _UserRequestsService: UserRequestsService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._ActivatedRoute.params.subscribe((data) => {
      console.log(data.id);
      this._UserRequestsService.getOneUser(data.id).subscribe((data) => {
        console.log(data);
        this.user = data;
      });
    });
  }

  update(id: string, user: any) {
    this._UserRequestsService.editOneUser(id, user).subscribe((data) => {
      console.log(data);
      this._Router.navigate(['/register', data]);
    });
  }
}
