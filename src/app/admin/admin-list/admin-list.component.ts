import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  admins: Admin[];

  constructor(private adminService: AdminService) { }


  /**
    * Asks the service to update the list of admins
    */
  getAdmins(): void {
    this.adminService.getAdmins()
      .subscribe(admins => {
        this.admins = admins;
      });
  }

  ngOnInit() {
    this.getAdmins();
  }
}
