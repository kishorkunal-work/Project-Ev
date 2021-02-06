import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirquoteComponent } from './enquirquote.component';

describe('EnquirquoteComponent', () => {
  let component: EnquirquoteComponent;
  let fixture: ComponentFixture<EnquirquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquirquoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquirquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
