import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TierModifyComponent } from './tier-modify.component';

describe('TierModifyComponent', () => {
  let component: TierModifyComponent;
  let fixture: ComponentFixture<TierModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TierModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TierModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
