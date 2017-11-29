import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryTestComponent } from './entry-test.component';

describe('EntryTestComponent', () => {
  let component: EntryTestComponent;
  let fixture: ComponentFixture<EntryTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
