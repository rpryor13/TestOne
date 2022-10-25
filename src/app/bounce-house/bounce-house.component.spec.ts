import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceHouseComponent } from './bounce-house.component';

describe('BounceHouseComponent', () => {
  let component: BounceHouseComponent;
  let fixture: ComponentFixture<BounceHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BounceHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BounceHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
