import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KirubaComponent } from './kiruba.component';

describe('KirubaComponent', () => {
  let component: KirubaComponent;
  let fixture: ComponentFixture<KirubaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KirubaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KirubaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
