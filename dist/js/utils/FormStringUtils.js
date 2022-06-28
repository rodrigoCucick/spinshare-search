export class FormStringUtils {
    static removeSpecialCharacters(formValue) {
        return formValue.replace(/[+*\[\]\/\\{}()<>$@#=-]/g, '');
    }
    static nullToZero(formValue) {
        return formValue === '' ? '0' : formValue;
    }
    static onlyNumbers(formValue) {
        return formValue.replace(/\D/g, '');
    }
}
