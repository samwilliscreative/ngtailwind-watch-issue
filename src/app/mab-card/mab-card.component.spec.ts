import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MabCardComponent } from './mab-card.component';

describe('MabCardComponent', () => {
  let component: MabCardComponent;
  let fixture: ComponentFixture<MabCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MabCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MabCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
