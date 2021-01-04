import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeteoDetailComponent } from './neteo-detail.component';

describe('NeteoDetailComponent', () => {
  let component: NeteoDetailComponent;
  let fixture: ComponentFixture<NeteoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeteoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeteoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
