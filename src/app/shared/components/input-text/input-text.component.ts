import { AfterViewInit, Component, ElementRef, forwardRef, OnInit, ViewChild } from '@angular/core';
import { MY_NG_VALUE_ACCESSOR, MyControlValueAccessor } from "../../../modules/forms/directives/control_value_accessor";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [{
    provide: MY_NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputTextComponent),
    multi: true
  }]
})
export class InputTextComponent implements OnInit, AfterViewInit, MyControlValueAccessor {
  @ViewChild('inputElement') private inputRef: ElementRef | undefined;

  value = '';

  private onChange = (_: string) => {};

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.inputRef?.nativeElement.addEventListener('input', (event: InputEvent) => {
      this.onChange((event.target as HTMLInputElement)?.value);
    });
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  writeValue(val: any) {
    this.value = val;
  }
}
