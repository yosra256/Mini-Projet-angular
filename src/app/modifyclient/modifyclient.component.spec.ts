import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyclientComponent } from './modifyclient.component';

describe('ModifyclientComponent', () => {
  let component: ModifyclientComponent;
  let fixture: ComponentFixture<ModifyclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
