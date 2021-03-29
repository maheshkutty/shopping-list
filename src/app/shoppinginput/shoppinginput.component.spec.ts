import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppinginputComponent } from './shoppinginput.component';

describe('ShoppinginputComponent', () => {
  let component: ShoppinginputComponent;
  let fixture: ComponentFixture<ShoppinginputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppinginputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppinginputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
