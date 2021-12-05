import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = {
    id: '',
    username: '',
    password: '',
    correo: '',
    telefono: ''
  };

  constructor(private userservice: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  createUser()
  {
    //delete this.user.id;
    this.userservice.createUser(this.user).subscribe(
      (response:any) => {
        console.log(response)
      },
      (error:any) => console.log(error)
    );
    this.router.navigate(['home']);
  }

  return()
  {
    this.router.navigate(['home']);
  }

}
