import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeftComponent } from './user-left.component';

describe('UserLeftComponent', () => {
  let component: UserLeftComponent;
  let fixture: ComponentFixture<UserLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
