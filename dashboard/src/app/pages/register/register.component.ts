import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../models/iuser';
import { UserRequestsService } from '../../services/user-requests.service';
import { NgToastService } from 'ng-angular-popup';
import { ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
ActivatedRoute;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  user: IUser = {} as IUser;
  users: any[] = [];
  userLoginForm: any;
  view: any;

  @ViewChild('myDiv') myDiv: ElementRef;

  nameRegx = /^[a-zA-Z0-9 ]{3,20}$/;

  // email with regx and errors
  emailRegx = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-z]{2,4})$/;

  // password with regx and errors
  passwordRegx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  constructor(
    private _ActivatedRoute: ActivatedRoute,

    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserRequestsService,
    public tost: NgToastService
  ) {
    this.userRegisterForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(this.nameRegx),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(this.emailRegx),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(this.passwordRegx),
        ],
      ],
      role: ['admin', [Validators.required]],
    });
  }

  get name() {
    return this.userRegisterForm.get('name');
  }
  get email() {
    return this.userRegisterForm.get('email');
  }
  get password() {
    return this.userRegisterForm.get('password');
  }

  signUpFunc() {
    this.userService.signup(this.userRegisterForm.value).subscribe({
      next: (data) => {
        let temp = JSON.parse(JSON.stringify(data));
        this.tost.success({
          detail: 'Succeeded',
          summary: temp.message,
          duration: 5000,
        });
        location.reload();
        // this.router.navigate(['/register']);
      },
      error: (err) => {
        this.tost.error({
          detail: 'Error',
          summary: err.error.message,
          duration: 5000,
        });
      },
    });
  }

  //============================< image upload >================================================

  file: File[] = [];
  files: File[] = [];

  onSelectThumbnail(event) {
    // console.log(event);
    this.file.push(...event.addedFiles);
    // console.log(this.file[0]);
  }
  onSelectImage(event) {
    this.files.push(...event.addedFiles);
    const selectedFile = event.addedFiles[0];
    console.log(this.files.slice(0 - 4));
  }
  onRemove(event) {
    // console.log(event);
    this.file.splice(this.file.indexOf(event), 1);
  }
  onRemoveImges(event) {
    this.files.splice(this.file.indexOf(event), 1);
  }

  moveToLogin() {
    this.router.navigate(['/login']);
  }

  display() {
    // this.router.navigate(['/reg']);

    this.myDiv.nativeElement.style.display = 'none';
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data as any;
      console.log(data);
      // this._ActivatedRoute.params.subscribe((editedUser) => {
      //   for (var i = 0; i < this.users.length; i++) {
      //     if (this.users[i].id == editedUser.id) {
      //       this.users[i] = editedUser;
      //       console.log(this.users);
      //       return this.users;
      //     }
      //   }
      // });
      // this._ActivatedRoute.params.subscribe((data) => {
      //   this.users.push(data) as any;
      //   console.log(data);
      //   console.log(this.users);
      //   return this.users;
      // });
    });
  }
  displayUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data as any;
      console.log(data);
    });
  }
  deleteUser(deletedid: any) {
    this.userService.deleteUser(deletedid).subscribe({
      next: (data) => {
        this.users = this.users.filter((useer) => {
          useer.id !== deletedid;
        });
        this.displayUsers();
      },
      error: (err) => {
        console.log(err);
        this.displayUsers();
        this.tost.success({
          detail: 'Succeeded',
          summary: 'User Deleted successfuly',
          duration: 5000,
        });
      },
    });
  }

  // edit(id: any) {
  //   this.router.navigate(['/reg', id]);
  // }
}
