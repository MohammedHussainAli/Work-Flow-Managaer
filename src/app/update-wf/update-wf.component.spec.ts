import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWfComponent } from './update-wf.component';

describe('UpdateWfComponent', () => {
  let component: UpdateWfComponent;
  let fixture: ComponentFixture<UpdateWfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
