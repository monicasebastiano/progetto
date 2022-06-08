import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDogComponent } from './component-dog.component';

describe('ComponentDogComponent', () => {
  let component: ComponentDogComponent;
  let fixture: ComponentFixture<ComponentDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentDogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
