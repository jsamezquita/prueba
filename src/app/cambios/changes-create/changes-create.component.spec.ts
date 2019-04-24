import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesCreateComponent } from './changes-create.component';

describe('ChangesCreateComponent', () => {
  let component: ChangesCreateComponent;
  let fixture: ComponentFixture<ChangesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
