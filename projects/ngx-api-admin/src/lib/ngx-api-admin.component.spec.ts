import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxApiAdminComponent } from './ngx-api-admin.component';

describe('NgxApiAdminComponent', () => {
  let component: NgxApiAdminComponent;
  let fixture: ComponentFixture<NgxApiAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxApiAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxApiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
