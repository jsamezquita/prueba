import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesListComponent } from './changes-list.component';

describe('ChangesListComponent', () => {
  let component: ChangesListComponent;
  let fixture: ComponentFixture<ChangesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
