import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowActivitiesComponent } from './workflow-activities.component';

describe('WorkflowActivitiesComponent', () => {
  let component: WorkflowActivitiesComponent;
  let fixture: ComponentFixture<WorkflowActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
