import { Component, OnInit, Input} from '@angular/core';
import { DependenciesService } from '../dependencies.service';
import { ActivatedRoute } from '@angular/router';
import { DependenciesDetail } from '../dependencies-detail';

@Component({
  selector: 'app-dependencies-detail',
  templateUrl: './dependencies-detail.component.html',
  styleUrls: ['./dependencies-detail.component.css']
})
export class DependenciesDetailComponent implements OnInit {

  constructor(
    private depService: DependenciesService,
    private route: ActivatedRoute
  ) { }

  /**
  * The dependency whose details we want to show
  */
  depDetail: DependenciesDetail;



  /**
  * The dependency's id retrieved from the address
  */
 @Input() dep_id: number;

 getDependencyDetail(): void {
    console.log(this.dep_id);
    this.depService.getDependencyDetail(this.dep_id)
      .subscribe(detail => {
        this.depDetail = detail
      });
  }


  ngOnInit() {
    this.depDetail = new DependenciesDetail();
    this.getDependencyDetail();
  }

}
