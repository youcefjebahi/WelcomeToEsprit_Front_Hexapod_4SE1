import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsBannerComponent } from './ads-banner.component';

describe('AdsBannerComponent', () => {
  let component: AdsBannerComponent;
  let fixture: ComponentFixture<AdsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
