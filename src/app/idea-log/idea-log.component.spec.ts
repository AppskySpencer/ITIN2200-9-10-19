import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaLogComponent } from './idea-log.component';

describe('IdeaLogComponent', () => {
  let component: IdeaLogComponent;
  let fixture: ComponentFixture<IdeaLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
