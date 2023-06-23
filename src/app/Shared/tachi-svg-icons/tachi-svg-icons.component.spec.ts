import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TachiSvgIconsComponent } from './tachi-svg-icons.component';

describe('TachiSvgIconsComponent', () => {
  let component: TachiSvgIconsComponent;
  let fixture: ComponentFixture<TachiSvgIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TachiSvgIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TachiSvgIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
