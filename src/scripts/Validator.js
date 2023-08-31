import {required, minLength,  helpers} from "@vuelidate/validators";



export class Validator{

    _patterns = {
        cyrillicPattern : /^[\u0400-\u04FF]+$/,
        passwPattern : /^[\w!@#$%^&*]+$/,
    }
    constructor(pattern) {
        this.pattern = pattern
    }
    _testPattern = (str, pattern)=> {
        const re = RegExp(pattern);
        for (const el of str) {
            if (re.test(el)) {
                return true
            }
        }
        return false
    }
    matchesEvery = (str, pattern)=>{
       /**функция проверяет соответствуют ли ВСЕ символы указанному в аргументах или конструкторе паттерну*/
        const re = RegExp(this.pattern || pattern);
       return [...str].every(el=>re.test(el))
    }
    matchesSome=(str, pattern)=>{
        /**функция проверяет соответствует ли хоть один символ указанному в аргументах или конструкторе паттерну*/
        const re = RegExp(this.pattern || pattern);
        return [...str].some(el=>re.test(el))
    }
}

export const noCyrillicValidator=(str)=>{
    /**функция проверяет отсутствие кириллицы в строке*/
    if (!str) return true
    const validator = new Validator()
    return ! validator.matchesSome(str, validator._patterns.cyrillicPattern)
}
export const correctPasswValidator=(str)=>{
    /**функция проверяет правильность символов в пароле*/
    if (!str) return true
    const validator = new Validator()
    return validator.matchesEvery(str, validator._patterns.passwPattern)
}


export const noCyrilics = helpers.withMessage(
    "Не должно содержать кириллицы",
    noCyrillicValidator
)
export const correctPassw = helpers.withMessage(
    "Введены недопустимые символы",
    correctPasswValidator
)
export const customRequired = helpers.withMessage(
    "Поле не может быть пустым",
    required
)
export const customMinLength = (len)=>helpers.withMessage(
    `Минимальная длина ${len}`,
    minLength(len)
)



