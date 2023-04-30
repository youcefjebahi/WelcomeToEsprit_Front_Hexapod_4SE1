import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadmissioncandidacyComponent } from './addadmissioncandidacy.component';

describe('AddadmissioncandidacyComponent', () => {
  let component: AddadmissioncandidacyComponent;
  let fixture: ComponentFixture<AddadmissioncandidacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddadmissioncandidacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddadmissioncandidacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
