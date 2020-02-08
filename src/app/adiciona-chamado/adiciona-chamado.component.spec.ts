import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionaChamadoComponent } from './adiciona-chamado.component';

describe('AdicionaChamadoComponent', () => {
  let component: AdicionaChamadoComponent;
  let fixture: ComponentFixture<AdicionaChamadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionaChamadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionaChamadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
