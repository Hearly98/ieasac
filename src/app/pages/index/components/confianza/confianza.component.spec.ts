import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfianzaComponent } from './confianza.component';

describe('ConfianzaComponent', () => {
  let component: ConfianzaComponent;
  let fixture: ComponentFixture<ConfianzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfianzaComponent]
    });
    fixture = TestBed.createComponent(ConfianzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
