import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRComponent } from './panel-r.component';

describe('PanelRComponent', () => {
  let component: PanelRComponent;
  let fixture: ComponentFixture<PanelRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
