import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GhComponent } from './ghcomponent.component';

describe('GhcomponentComponent', () => {
  let component: GhComponent;
  let fixture: ComponentFixture<GhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
