import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRabbitComponent } from './component-rabbit.component';

describe('ComponentRabbitComponent', () => {
  let component: ComponentRabbitComponent;
  let fixture: ComponentFixture<ComponentRabbitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRabbitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentRabbitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
