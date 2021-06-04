import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemItemComponent } from './system-item.component';

describe('SystemItemComponent', () => {
  let component: SystemItemComponent;
  let fixture: ComponentFixture<SystemItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
