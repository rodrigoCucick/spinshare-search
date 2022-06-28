export class FormStringUtils {
    public static removeSpecialCharacters(formValue: string): string {
        return formValue.replace(/[+*\[\]\/\\{}()<>$@#=-]/g, '');
    }

    public static nullToZero(formValue: string): string {
        return formValue === '' ? '0' : formValue;
    }

    public static onlyNumbers(formValue: string): string {
        return formValue.replace(/\D/g, '');
    }
}