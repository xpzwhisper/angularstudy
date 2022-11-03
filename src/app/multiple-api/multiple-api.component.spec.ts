import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleAPIComponent } from './multiple-api.component';

describe('MultipleAPIComponent', () => {
  let component: MultipleAPIComponent;
  let fixture: ComponentFixture<MultipleAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
