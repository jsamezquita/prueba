import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosWebListComponent } from './estados-web-list.component';

describe('EstadosWebListComponent', () => {
  let component: EstadosWebListComponent;
  let fixture: ComponentFixture<EstadosWebListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosWebListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosWebListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
