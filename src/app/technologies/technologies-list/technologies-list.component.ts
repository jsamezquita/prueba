import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { TechnologiesService } from '../technologies.service';
import { MatTableDataSource } from '@angular/material';
import { TechnologyDetail } from '../technologies-detail';
import { TechnologiesCreateComponent } from '../technologies-create/technologies-create.component';
import {MatBottomSheet} from "@angular/material";
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * The component for the list of techs in the Website
 */
@Component({
    selector: 'app-list-technologies',
    templateUrl: './technologies-list.component.html', 
    styleUrls: ['./technologies-list.component.css'],
    animations: [
      trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
      ],
     })
export class TechnologiesListComponent implements OnInit {

    @ViewChild('CreateTechModal') createTechModal : ElementRef;
    displayedColumns: string[] = ['id','name'];
    expandedElement: TechnologyDetail | null;
    /**
     * Constructor for the component
     * @param technologiesService The techs's services provider
     */
    constructor(private technologiesService: TechnologiesService, private bottomSheet: MatBottomSheet) { }
    
    /**
     * The list of techs which belong to the website
     */
    technologies: any;
    techId: number;

    showCreateTechModal():void
    {
      this.bottomSheet.open(TechnologiesCreateComponent, {
        panelClass:'bottom-half',
        
      });
    }
    /**
     * Asks the service to update the list of techs
     */
    getTechnologies(): void {
        this.technologiesService.getTechnologies().subscribe(klk => this.technologies = new MatTableDataSource(klk));
    }
    getTechnologyDetail(id): void {
      this.techId = id;
    }

    /**
     * This will initialize the component by retrieving the list of techs from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getTechnologies();
    }
      applyFilter(filterValue: string) {
    this.technologies.filter = filterValue.trim().toLowerCase();
  }
}