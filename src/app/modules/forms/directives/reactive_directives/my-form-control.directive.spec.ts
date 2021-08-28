import { MyFormControlDirective } from './my-form-control.directive';

describe('MyFormControlDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {};
    const directive = new MyFormControlDirective(mockElementRef as any);
    expect(directive).toBeTruthy();
  });
});
