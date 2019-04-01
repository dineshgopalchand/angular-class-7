import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        // console.log(control.value);
        if ((control.value as string).indexOf(' ') >= 0) {
            return {containesSpace : true};
        }
        return null;
    }
    static uniqueUserName(control: AbstractControl): Promise<ValidationErrors | null> {
        // setTimeout( _ => {
        //     // some
        //     return null;
        // },200);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'dinesh') {
                    resolve({uniqueUserName : true});
                } else {
                    resolve(null);
                }
            }, 3000);
        });

    }
}

