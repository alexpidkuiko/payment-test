import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableActionsBarComponent } from './table-actions-bar.component';

describe('TableActionsBarComponent', () => {
  let component: TableActionsBarComponent;
  let fixture: ComponentFixture<TableActionsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableActionsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableActionsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
