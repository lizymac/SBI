import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProServComponent } from './pro-serv.component';

describe('ProServComponent', () => {
  let component: ProServComponent;
  let fixture: ComponentFixture<ProServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProServComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
