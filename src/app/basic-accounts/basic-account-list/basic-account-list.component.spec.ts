import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAccountListComponent } from './basic-account-list.component';

describe('BasicAccountListComponent', () => {
  let component: BasicAccountListComponent;
  let fixture: ComponentFixture<BasicAccountListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicAccountListComponent]
    });
    fixture = TestBed.createComponent(BasicAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
