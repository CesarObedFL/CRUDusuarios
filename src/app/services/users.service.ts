import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id:string,
  username:string,
  password:string,
  correo:string, 
  telefono: string
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  url = '/api';

  constructor(private httpclient: HttpClient) { }

  // get users
  getUsers() 
  {
    return this.httpclient.get(this.url+'/usuarios');
  }

  getUserById(id:string)
  {
    return this.httpclient.get(this.url+'/usuarios/'+id);
  }

  createUser(user:any)
  {
    return this.httpclient.post(this.url+'/usuarios', user);
  }

  updateUser(id:string, user:any)
  {
    return this.httpclient.put(this.url+'/usuarios/'+id, user);
  }

  deleteUser(id:string)
  {
    return this.httpclient.delete(this.url+'/usuarios/'+id);
  }
}

