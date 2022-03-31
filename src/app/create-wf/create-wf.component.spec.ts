import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWfComponent } from './create-wf.component';

describe('CreateWfComponent', () => {
  let component: CreateWfComponent;
  let fixture: ComponentFixture<CreateWfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
