import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreateWorkflowComponent } from './category-create-workflow.component';

describe('CategoryCreateWorkflowComponent', () => {
  let component: CategoryCreateWorkflowComponent;
  let fixture: ComponentFixture<CategoryCreateWorkflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCreateWorkflowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCreateWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
