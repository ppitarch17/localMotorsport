import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrecascheduleComponent } from './frecaschedule.component';

describe('FrecascheduleComponent', () => {
  let component: FrecascheduleComponent;
  let fixture: ComponentFixture<FrecascheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrecascheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrecascheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
