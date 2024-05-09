import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F1scheduleComponent } from './f1schedule.component';

describe('F1scheduleComponent', () => {
  let component: F1scheduleComponent;
  let fixture: ComponentFixture<F1scheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F1scheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F1scheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
