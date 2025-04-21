import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalListComponent } from './technical-list.component';

describe('TechnicalListComponent', () => {
  let component: TechnicalListComponent;
  let fixture: ComponentFixture<TechnicalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
