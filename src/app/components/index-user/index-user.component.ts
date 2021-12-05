import { Component, OnInit } from '@angular/core';
import { UsersService, User } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {

  users: User[] = [];
  user!: User;

  constructor(private userservice: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() 
  {
    this.userservice.getUsers().subscribe(
      (response:any) => { 
        console.log(response) 
        this.users = <any>response;
      },
      (error:any) => console.log(error)
    );
  }

  edit(id:string)
  {
    this.router.navigate(['user/edit/'+id]);
    /*this.userservice.getUserById(id).subscribe(
      (response:any) => {
        this.user = <any>response;
      },
      (error) => console.log(error)
    );*/
  }

  delete(id:string)
  {
    this.userservice.deleteUser(id).subscribe(
      (response:any) => {
        this.ngOnInit(); // reload the component...
        console.log(response);
      },
      (error:any) => console.log(error)
    );
  }
}
