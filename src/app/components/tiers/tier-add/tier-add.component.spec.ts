import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierAddComponent } from './tier-add.component';

describe('TierAddComponent', () => {
  let component: TierAddComponent;
  let fixture: ComponentFixture<TierAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
