import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetresultComponent } from './getresult.component';

describe('GetresultComponent', () => {
  let component: GetresultComponent;
  let fixture: ComponentFixture<GetresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
