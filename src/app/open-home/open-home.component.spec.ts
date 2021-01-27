import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenHomeComponent } from './open-home.component';

describe('OpenHomeComponent', () => {
  let component: OpenHomeComponent;
  let fixture: ComponentFixture<OpenHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
