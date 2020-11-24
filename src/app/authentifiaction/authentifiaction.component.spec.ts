import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentifiactionComponent } from './authentifiaction.component';

describe('AuthentifiactionComponent', () => {
  let component: AuthentifiactionComponent;
  let fixture: ComponentFixture<AuthentifiactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentifiactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentifiactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
