import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParotComponent } from './component-parot.component';

describe('ComponentParotComponent', () => {
  let component: ComponentParotComponent;
  let fixture: ComponentFixture<ComponentParotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentParotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentParotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
