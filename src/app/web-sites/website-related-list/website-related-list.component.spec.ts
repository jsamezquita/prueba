import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteRelatedListComponent } from './website-related-list.component';

describe('WebsiteRelatedListComponent', () => {
  let component: WebsiteRelatedListComponent;
  let fixture: ComponentFixture<WebsiteRelatedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteRelatedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteRelatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
