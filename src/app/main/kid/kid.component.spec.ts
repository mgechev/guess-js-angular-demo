import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidComponent } from './kid.component';

describe('KidComponent', () => {
  let component: KidComponent;
  let fixture: ComponentFixture<KidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
