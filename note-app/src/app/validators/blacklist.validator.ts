import { AbstractControl, ValidatorFn } from "@angular/forms";

export function BlackListValidatorFactory(blackList: RegExp[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    for (let i = 0; i < blackList.length; i++) {
      if (blackList[i].test(control.value)) {
        return { blackList: control.value };
      }
    }
    return null;
  };
}
