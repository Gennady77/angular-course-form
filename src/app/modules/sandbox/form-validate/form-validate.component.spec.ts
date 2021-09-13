import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidateComponent } from './form-validate.component';
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule } from "../../forms/forms.module";

describe('FormValidateComponent', () => {
  let component: FormValidateComponent;
  let fixture: ComponentFixture<FormValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormValidateComponent ],
      imports: [
        SharedModule,
        FormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an invalid error', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('app-input-text.error-input input');

    inputElement.value = '123';

    inputElement.dispatchEvent(new Event('input', {
      bubbles: true,
      cancelable: true,
    }));

    fixture.detectChanges();

    const messageElement = fixture.nativeElement.querySelector('.alert-error');

    expect(messageElement).toBeTruthy();
  });

  it('should show an error name', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('app-input-text.error-input input');

    inputElement.value = '123';

    inputElement.dispatchEvent(new Event('input', {
      bubbles: true,
      cancelable: true,
    }));

    fixture.detectChanges();

    const messageElement = fixture.nativeElement.querySelector('.alert-error-name');

    expect(messageElement).toBeTruthy();
  });

  it('should set array of validators', () => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('app-input-text.error-digit input');

    inputElement.value = 'asd';
    inputElement.dispatchEvent(new Event('input', {
      bubbles: true,
      cancelable: true,
    }));

    fixture.detectChanges();

    let messageElement = fixture.nativeElement.querySelector('.error-message-digit');
    let messageDigitElement = fixture.nativeElement.querySelector('.error-message-required');
    expect(messageElement).toBeTruthy();
    expect(messageDigitElement).toBeFalsy();

    inputElement.value = '';
    inputElement.dispatchEvent(new Event('input', {
      bubbles: true,
      cancelable: true,
    }));

    fixture.detectChanges();

    messageElement = fixture.nativeElement.querySelector('.error-message-digit');
    messageDigitElement = fixture.nativeElement.querySelector('.error-message-required');
    expect(messageElement).toBeFalsy();
    expect(messageDigitElement).toBeTruthy();
  });
});
