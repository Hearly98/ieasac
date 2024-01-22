import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProductosComponent } from './banner-productos.component';

describe('BannerProductosComponent', () => {
  let component: BannerProductosComponent;
  let fixture: ComponentFixture<BannerProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
