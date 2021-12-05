import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = {
    id: '',
    username: '',
    password: '',
    correo: '',
    telefono: ''
  };

  constructor(
              private userservice: UsersService, 
              private router: Router, 
              private activatedRoute: ActivatedRoute
            ) { }

  ngOnInit(): void {
    const user_id = <string>this.activatedRoute.snapshot.params.id;
    this.userservice.getUserById(user_id).subscribe(
      (response) => {
        response = JSON.parse(JSON.stringify(response))[0];
        this.user = <any>(response);
      },
      (error) => console.log(error)
    );
  }

  editUser()
  {
    this.userservice.updateUser(this.user.id, this.user).subscribe(
      (response:any) => {
        console.log(response);
        this.router.navigate(['home']);
      },
      (error:any) => console.log(error)
    );
  }

  return() 
  {
    this.router.navigate(['home']);
  }


}
