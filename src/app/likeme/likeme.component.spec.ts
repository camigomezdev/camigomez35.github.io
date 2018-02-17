import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikemeComponent } from './likeme.component';

describe('LikemeComponent', () => {
  let component: LikemeComponent;
  let fixture: ComponentFixture<LikemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
