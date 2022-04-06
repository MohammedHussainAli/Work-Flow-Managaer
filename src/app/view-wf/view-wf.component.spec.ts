import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWfComponent } from './view-wf.component';

describe('ViewWfComponent', () => {
  let component: ViewWfComponent;
  let fixture: ComponentFixture<ViewWfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
