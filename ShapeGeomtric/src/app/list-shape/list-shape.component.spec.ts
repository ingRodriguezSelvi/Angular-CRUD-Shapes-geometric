import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShapeComponent } from './list-shape.component';

describe('ListShapeComponent', () => {
  let component: ListShapeComponent;
  let fixture: ComponentFixture<ListShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShapeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
