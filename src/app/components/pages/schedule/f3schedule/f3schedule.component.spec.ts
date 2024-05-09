import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F3scheduleComponent } from './f3schedule.component';

describe('F3scheduleComponent', () => {
  let component: F3scheduleComponent;
  let fixture: ComponentFixture<F3scheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F3scheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F3scheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
