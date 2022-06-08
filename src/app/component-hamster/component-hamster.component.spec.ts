import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHamsterComponent } from './component-hamster.component';

describe('ComponentHamsterComponent', () => {
  let component: ComponentHamsterComponent;
  let fixture: ComponentFixture<ComponentHamsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHamsterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHamsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
