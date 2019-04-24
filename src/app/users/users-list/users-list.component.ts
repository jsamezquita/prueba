import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  expande: boolean = false;
  users: User[];
  userId: number;

  constructor(private usersService: UsersService) { }

  expandir(id): void {
    //if (this.expande && id != this.userId) {
    //this.userId = id;
    //}
    //else {
    this.userId = id;
    this.expande = !this.expande;
    //}

  }

  /**
    * Asks the service to update the list of users
    */
  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => {
        this.users = users;
      });
  }

  ngOnInit() {
    this.getUsers();
  }

}
