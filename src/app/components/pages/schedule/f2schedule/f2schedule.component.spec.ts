import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F2scheduleComponent } from './f2schedule.component';

describe('F2scheduleComponent', () => {
  let component: F2scheduleComponent;
  let fixture: ComponentFixture<F2scheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [F2scheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(F2scheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
