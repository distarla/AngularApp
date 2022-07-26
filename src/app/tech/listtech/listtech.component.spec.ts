import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtechComponent } from './listtech.component';

describe('ListtechComponent', () => {
  let component: ListtechComponent;
  let fixture: ComponentFixture<ListtechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
