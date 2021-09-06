import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangeStateComponent, INIT_STATE_VALUE, INIT_STATE_VALUE_DISABLED } from './form-change-state.component';
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

    expect(inputElement.value).toEqual(INIT_STATE_VALUE);
  });

  it('should set init state disabled', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('app-input-text.disabled input');

    expect(inputElement.value).toEqual(INIT_STATE_VALUE_DISABLED);
    expect(inputElement.disabled).toBeTrue();
  });

  it('should disable control', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('app-input-text.change-status input');
    const buttonElement: HTMLInputElement = fixture.nativeElement.querySelector('button.set-to-disable');

    buttonElement.click();

    fixture.detectChanges();

    expect(inputElement.disabled).toBeTrue();
  });

  it('should enable control', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('app-input-text.change-status input');
    const buttonDisable: HTMLInputElement = fixture.nativeElement.querySelector('button.set-to-disable');
    const buttonEnable: HTMLInputElement = fixture.nativeElement.querySelector('button.set-to-enable');

    buttonDisable.click();
    fixture.detectChanges();

    expect(inputElement.disabled).toBeTrue();

    buttonEnable.click();
    fixture.detectChanges();

    expect(inputElement.disabled).toBeFalse();
  });

  it('should call registerOnDisabledChange subscribers twice', () => {
    const buttonCount: HTMLInputElement = fixture.nativeElement.querySelector('button.count-registers');

    buttonCount.click();
    fixture.detectChanges();

    expect(component.countOfDisables).toEqual(2);
  });

  it('should call registerOnChange subscribers twice', () => {
    const buttonCount: HTMLInputElement = fixture.nativeElement.querySelector('button.count-changes');

    buttonCount.click();
    fixture.detectChanges();

    expect(component.countOfChanges).toEqual(2);
  });
});
