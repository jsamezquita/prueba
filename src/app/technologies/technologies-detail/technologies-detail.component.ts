import { Component, OnInit, Input} from '@angular/core';
import { TechnologiesService } from '../technologies.service';
import { ActivatedRoute } from '@angular/router';
import { TechnologyDetail } from '../technologies-detail';

@Component({
  selector: 'app-technologies-detail',
  templateUrl: './technologies-detail.component.html',
  styleUrls: ['./technologies-detail.component.css']
})
export class TechnologiesDetailComponent implements OnInit {

  constructor(
    private techService: TechnologiesService,
    private route: ActivatedRoute
  ) { }

  /**
  * The tech whose details we want to show
  */
  techDetail: TechnologyDetail;



  /**
  * The tech's id retrieved from the address
  */
 @Input() tech_id: number;

  getTechnologyDetail(): void {
    console.log(this.tech_id);
    this.techService.getTechnologyDetail(this.tech_id)
      .subscribe(detail => {
        this.techDetail = detail
      });
  }


  ngOnInit() {
    this.techDetail = new TechnologyDetail();
    this.getTechnologyDetail();
  }

}
