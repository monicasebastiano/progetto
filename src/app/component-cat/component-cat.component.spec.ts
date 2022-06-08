import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCatComponent } from './component-cat.component';

describe('ComponentCatComponent', () => {
  let component: ComponentCatComponent;
  let fixture: ComponentFixture<ComponentCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
