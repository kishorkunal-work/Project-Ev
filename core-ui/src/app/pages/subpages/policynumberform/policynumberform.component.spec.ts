import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicynumberformComponent } from './policynumberform.component';

describe('PolicynumberformComponent', () => {
  let component: PolicynumberformComponent;
  let fixture: ComponentFixture<PolicynumberformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicynumberformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicynumberformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
