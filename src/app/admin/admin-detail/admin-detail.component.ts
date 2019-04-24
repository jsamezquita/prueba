import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ActivatedRoute } from '@angular/router';
import { AdminDetail } from '../admin-detail';

@Component({
  selector: 'app-admin-detail',
  templateUrl: './admin-detail.component.html',
  styleUrls: ['./admin-detail.component.css']
})
export class AdminDetailComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) { }

  /**
  * The admin whose details we want to show
  */
  adminDetail: AdminDetail;



  /**
  * The admin's id retrieved from the address
  */
  admin_id: number;

  getEditorialDetail(): void {
    this.adminService.getAdminDetail(this.admin_id)
      .subscribe(adminDetail => {
        this.adminDetail = adminDetail
      });
  }


  ngOnInit() {
    this.admin_id = +this.route.snapshot.paramMap.get('id');
    this.adminDetail = new AdminDetail();
    this.getEditorialDetail();
  }

}
