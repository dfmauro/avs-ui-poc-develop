import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorOptionsComponent } from './floor-options.component';

describe('FloorOptionsComponent', () => {
  let component: FloorOptionsComponent;
  let fixture: ComponentFixture<FloorOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
