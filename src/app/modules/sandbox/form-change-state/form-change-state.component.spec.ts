import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangeStateComponent } from './form-change-state.component';
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule } from "../../forms/forms.module";

describe('FormChangeStateComponent', () => {
  let component: FormChangeStateComponent;
  let fixture: ComponentFixture<FormChangeStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChangeStateComponent ],
      imports: [
        SharedModule,
        FormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChangeStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set init state value', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('app-input-text.preset-value input');

    expect(inputElement.value).toEqual('init state value')
  });
});
