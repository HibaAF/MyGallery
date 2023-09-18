import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MygalleryComponent } from './mygallery.component';

describe('MygalleryComponent', () => {
  let component: MygalleryComponent;
  let fixture: ComponentFixture<MygalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MygalleryComponent]
    });
    fixture = TestBed.createComponent(MygalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
