import { DEFAULT_LOCALE } from '../../../global/constants';
import { isDotDecimalCountry } from './localeFunctions';
import { Locale } from '../../types';
import { toMoneyValue } from './financialFunctions';
import toNumber from './toNumber';

export const isEmpty = (value: string | unknown | undefined | null | Array<unknown>): boolean => {
    if (value === null || typeof value === 'undefined') {
        return true;
    }

    if (Array.isArray(value)) {
        return value.length <= 0;
    }

    if (typeof value === 'string') {
        return value === null || value === '';
    }

    if (typeof value === 'object') {
        return !Object.keys(value as Record<string, unknown>).length;
    }

    return false;
};

export const isObject = (object: unknown): boolean => object != null && typeof object === 'object';

export const modulo = (aNumStr: string, aDiv: number): number => {
    // for (i = 0; i < aNumStr.length; i += 1) {
    //     tmp += aNumStr.charAt(i);
    //     r = toNumber(tmp) % aDiv;
    //     tmp = r.toString();
    // }

    const tmp = aNumStr
        .split('')
        .reduce((accumulator, currentChar) => (toNumber(accumulator + currentChar) % aDiv).toString(), '');

    return toNumber(tmp) / 1;
};

export const isValidIBAN = (value: string): boolean => {
    const rearrange = value.substring(4, value.length) + value.substring(0, 4);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    const alphaMap: Record<string, number> = alphabet.reduce(
        (accumulator, currentValue, currentIndex) => ({
            ...accumulator,
            [currentValue]: currentIndex + 10,
        }),
        {}
    );

    const numberValue: number[] = rearrange.split('').map((letter) => alphaMap[letter] || toNumber(letter));

    return modulo(numberValue.join('').toString(), 97) === 1;
};

export const isValidEmail = (value: string): boolean => {
    // eslint-disable-next-line max-len
    const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return emailRegex.test(value);
};

export const isValidColor = (value: string): boolean => {
    // hex code of color can have 6 or 3 digits after an #
    const colorRegex = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

    return colorRegex.test(value);
};

export const isValidPhoneNumber = (value: string): boolean => {
    // This might still be used in the future, so leave it here
    // const nlPhoneRegExp = /^(\+(([0-9]){1,2})[-. ])?((((([0-9]){2,4})[-. ]){1,2}([0-9]{4,8}))|([0-9]{10}))$/;

    const phoneRegExp = /^(?=.{0,32}$)[0-9]+[\s]{0,1}([-][\s]{0,1}[0-9]+)?([\s]{0,1}[0-9]+)*$/;

    return phoneRegExp.test(value);
};

export const isValidNumber = (value: string, allowDecimals = false, locale?: Locale): boolean => {
    const isDotDecimal = isDotDecimalCountry(locale || DEFAULT_LOCALE);
    let numberRegExp = allowDecimals ? /^-?[0-9]+(\.[0-9]{3})*(,[0-9]{1,2})?$/ : /^-?[0-9]+(\.[0-9]{3})*$/; // Default with , as decimal separator

    if (isDotDecimal) {
        numberRegExp = allowDecimals ? /^-?[0-9]+(,[0-9]{3})*(\.[0-9]{1,2})?$/ : /^-?[0-9]+(,[0-9]{3})*$/;
    }

    return numberRegExp.test(value);
};

// Always test against Locale.EN, because toMoneyValue will contain an EN format
export const isValidMoney = (value: string, locale?: Locale): boolean => isValidNumber(value, true, locale);

export const isValidURI = (value: string): boolean => {
    // https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url
    // eslint-disable-next-line max-len
    const uriRegex =
        /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

    return uriRegex.test(value);
};

// **** BELOW SOME GENERIC VALIDATIONS USED BY SEVERAL COMPONENTS ****

export const isValidInputCurrency = (
    value: string | null | undefined,
    locale: Locale,
    isRequired: boolean,
    minValue?: number,
    maxValue?: number
): boolean => {
    const numberValue = toMoneyValue(value || '', locale);

    return (
        (!isRequired && (isEmpty(value) || value === '0')) ||
        (!isEmpty(value) &&
            (minValue === undefined || numberValue >= minValue) &&
            (maxValue === undefined || numberValue <= maxValue) &&
            isValidMoney(value || '', locale))
    );
};

export const isValidInputEmail = (value: string | null | undefined, isRequired: boolean): boolean =>
    (isEmpty(value) && !isRequired) || (!isEmpty(value) && isValidEmail(value as string));

export const isValidInputNumber = (
    value: number | string | null | undefined,
    locale: Locale,
    isRequired: boolean,
    minValue?: number,
    maxValue?: number
): boolean => {
    const stringValue = typeof value === 'number' ? value.toString() : value;
    const numberValue = toNumber(stringValue || '0');

    return (
        (isEmpty(value) && !isRequired) ||
        (!isEmpty(value) &&
            !Number.isNaN(stringValue) &&
            (minValue === undefined || numberValue >= minValue) &&
            (maxValue === undefined || numberValue <= maxValue) &&
            isValidNumber(numberValue.toString(), true, locale))
    );
};

export const isValidInputTelephone = (value: string | null | undefined, isRequired: boolean): boolean =>
    (isEmpty(value) && !isRequired) || (!isEmpty(value) && isValidPhoneNumber(value as string));

export const isValidInputText = (
    value: string | null | undefined,
    isRequired: boolean,
    minLength?: number,
    maxLength?: number
): boolean =>
    (isEmpty(value) && !isRequired) ||
    (!isEmpty(value) && (minLength === undefined || (value as string).length >= minLength)) ||
    (!isEmpty(value) && (maxLength === undefined || (value as string).length <= maxLength));

export const isValidInputURI = (value: string | null | undefined, isRequired: boolean): boolean =>
    (isEmpty(value) && !isRequired) || (!isEmpty(value) && isValidURI(value as string));

export const isValidInputColor = (value: string | null | undefined | unknown): boolean => {
    if (value === null || value === undefined || typeof value !== 'string') {
        return false;
    }

    return isValidColor(value);
};
