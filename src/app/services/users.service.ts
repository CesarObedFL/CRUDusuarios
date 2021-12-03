import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = '/api';

  constructor(private http: HttpClient) { }

  // get users
  getUsers() 
  {
    return this.http.get(this.url+'/usuarios');
  }

  getUserById(id:string)
  {
    return this.http.get(this.url+'/usuarios/'+id);
  }

  createUser(user:any)
  {
    return this.http.post(this.url+'/usuarios', user);
  }

  editUser(id:string, user:any) 
  {
    return this.http.put(this.url+'/usuarios/'+id, user);
  }

  deleteUser(id:string)
  {
    return this.http.delete(this.url+'/usuarios/'+id);
  }
}

export interface User {
  username:string,
  password:string,
  
}