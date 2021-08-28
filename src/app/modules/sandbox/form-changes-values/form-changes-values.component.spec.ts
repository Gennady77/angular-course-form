import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChangesValuesComponent } from './form-changes-values.component';
import { SharedModule } from "../../../shared/shared.module";
import { FormsModule } from "../../forms/forms.module";

fdescribe('FormChangesValuesComponent', () => {
  let component: FormChangesValuesComponent;
  let fixture: ComponentFixture<FormChangesValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChangesValuesComponent ],
      imports: [
        SharedModule,
        FormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChangesValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should insert text value of input into result box', () => {
    const testText = 'asd';
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('app-input-text input');
    const resultElement: HTMLInputElement = fixture.nativeElement.querySelector('.result');

    inputElement.value = testText;

    inputElement.dispatchEvent(new Event('input', {
      bubbles: true,
      cancelable: true,
    }));

    fixture.detectChanges();


    expect(resultElement.innerText).toEqual(testText);
  });
});
