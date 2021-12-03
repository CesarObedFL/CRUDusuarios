import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-index-user',
  templateUrl: './index-user.component.html',
  styleUrls: ['./index-user.component.css']
})
export class IndexUserComponent implements OnInit {

  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() 
  {
    this.userservice.getUsers().subscribe(
      (response:any) => { console.log(response) },
      (error:any) => console.log(error)
    );
  }

}
