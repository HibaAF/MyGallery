import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchNavbarComponent } from './navbar.component';

describe('TouchNavbarComponent', () => {
  let component: TouchNavbarComponent;
  let fixture: ComponentFixture<TouchNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TouchNavbarComponent]
    });
    fixture = TestBed.createComponent(TouchNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
