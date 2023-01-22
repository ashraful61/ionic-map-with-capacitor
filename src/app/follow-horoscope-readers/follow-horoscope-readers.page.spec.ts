import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FollowHoroscopeReadersPage } from './follow-horoscope-readers.page';

describe('FollowHoroscopeReadersPage', () => {
  let component: FollowHoroscopeReadersPage;
  let fixture: ComponentFixture<FollowHoroscopeReadersPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowHoroscopeReadersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FollowHoroscopeReadersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
