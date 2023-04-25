import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitationStudentsComponent } from './invitation-students.component';

describe('InvitationStudentsComponent', () => {
  let component: InvitationStudentsComponent;
  let fixture: ComponentFixture<InvitationStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitationStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitationStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
