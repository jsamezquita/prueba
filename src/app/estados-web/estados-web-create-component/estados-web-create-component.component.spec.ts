import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadosWebCreateComponentComponent } from './estados-web-create-component.component';

describe('EstadosWebCreateComponentComponent', () => {
  let component: EstadosWebCreateComponentComponent;
  let fixture: ComponentFixture<EstadosWebCreateComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadosWebCreateComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadosWebCreateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
