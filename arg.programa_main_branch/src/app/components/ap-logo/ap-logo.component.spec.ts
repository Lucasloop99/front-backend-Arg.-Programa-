import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< Updated upstream
import { ApLogoComponent } from './ap-logo.component';

describe('ApLogoComponent', () => {
  let component: ApLogoComponent;
  let fixture: ComponentFixture<ApLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApLogoComponent);
=======
import { APLogoComponent } from './ap-logo.component';

describe('APLogoComponent', () => {
  let component: APLogoComponent;
  let fixture: ComponentFixture<APLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APLogoComponent);
>>>>>>> Stashed changes
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
