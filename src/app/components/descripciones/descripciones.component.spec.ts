import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionesComponent } from './descripciones.component';

describe('DescripcionesComponent', () => {
  let component: DescripcionesComponent;
  let fixture: ComponentFixture<DescripcionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
