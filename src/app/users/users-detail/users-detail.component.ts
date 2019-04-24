import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { UserDetail } from '../user-detail';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { expand } from 'rxjs/operators';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  /**
  * The user whose details we want to show
  */
  userDetail: UserDetail;



  /**
  * The user's id retrieved from the address
  */
  usuario_id: number;

  expande: boolean=false;

  @Input() id: number;

  actualizar(): void{
    // this.router.navigate(['/users/:id',{ outlets: { edit: [this.usuario_id] } }]);
   this.expande = !this.expande;
  }

  getUserDetail(): void {
    this.userService.getUserDetail(this.id)
      .subscribe(userDetail => {
        this.userDetail = userDetail
      });
  }

  /**
  * The method which initializes the component
  * We need to initialize the user so it is never considered as undefined
  */
  ngOnInit() {
    //this.id = +this.route.snapshot.paramMap.get('id');
    this.userDetail = new UserDetail();
    this.getUserDetail();
    this.expande = false;
  }
}
