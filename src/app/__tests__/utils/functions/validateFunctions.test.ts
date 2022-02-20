import {
    isValidColor,
    isValidEmail,
    isValidIBAN,
    isValidNumber,
    isValidPhoneNumber,
    isValidURI,
} from '../../../utils/functions/validateFunctions';
import { Locale } from '../../../types';

describe('test validating functions', () => {
    test('isValidIBAN', () => {
        expect(isValidIBAN('IE21AIBK92115212345678')).toBe(true);
        expect(isValidIBAN('NL28RABO0383730678')).toBe(true);
        expect(isValidIBAN('NL03INGB0000004234')).toBe(true);
        expect(isValidIBAN('KZ232479919874847857')).toBe(true);
        expect(isValidIBAN('DE19500105178642424955')).toBe(true);
        expect(isValidIBAN('FR1612739000509668235186X94')).toBe(true);
        expect(isValidIBAN('BE25436247187482')).toBe(true);
        expect(isValidIBAN('GB62BARC20039568226736')).toBe(true);
        expect(isValidIBAN('NL28RABO0383730677')).toBe(false);
        expect(isValidIBAN('383730678')).toBe(false);
        expect(isValidIBAN('NL28RABO 038 373 0678')).toBe(true);
    });

    test('isValidEmail', () => {
        expect(isValidEmail('1@.com')).toBe(false);
        expect(isValidEmail('1@2.com')).toBe(true);
        expect(isValidEmail('1@2.co.uk')).toBe(true);
        expect(isValidEmail('1.nl@2.com')).toBe(true);
    });

    test('isValidNumber', () => {
        expect(isValidNumber('a')).toBe(false);
        expect(isValidNumber('1')).toBe(true);
        expect(isValidNumber('1234')).toBe(true);
        expect(isValidNumber('0')).toBe(true);
        expect(isValidNumber('1,09', false)).toBe(false);
        expect(isValidNumber('1,09', true)).toBe(true);
        expect(isValidNumber('1.09', false)).toBe(false);
        expect(isValidNumber('1.09', true)).toBe(false);
        expect(isValidNumber('1.09', true, 'EN' as Locale)).toBe(true);
        expect(isValidNumber('1.', true)).toBeFalsy();
        expect(isValidNumber('1.0', true)).toBeFalsy();
        expect(isValidNumber('1.00', true)).toBeFalsy();
        expect(isValidNumber('1.000', true)).toBeTruthy();
    });

    test('isValidPhoneNumber', () => {
        expect(isValidPhoneNumber('061234567')).toBe(true);
        expect(isValidPhoneNumber('061234567a')).toBe(false);
        expect(isValidPhoneNumber('061234567')).toBe(true);
        expect(isValidPhoneNumber('061234567a')).toBe(false);
        expect(isValidPhoneNumber('0612345678')).toBe(true);
        expect(isValidPhoneNumber('06-12345678')).toBe(true);
        expect(isValidPhoneNumber('020-1234567')).toBe(true);
        expect(isValidPhoneNumber('0299-123456')).toBe(true);
        expect(isValidPhoneNumber('06 12345678')).toBe(true);

        expect(isValidPhoneNumber('020')).toBe(true);
        expect(isValidPhoneNumber('020 -')).toBe(false);
        expect(isValidPhoneNumber('020 - ')).toBe(false);
        expect(isValidPhoneNumber('020 - 1')).toBe(true);
        expect(isValidPhoneNumber('020 - 1234567')).toBe(true);
        expect(isValidPhoneNumber('06 - 12345678')).toBe(true);

        expect(isValidPhoneNumber('06 - 123 45 678')).toBe(true);
        expect(isValidPhoneNumber('06 12 34 67 85')).toBe(true);
    });

    test('isValidURI', () => {
        expect(isValidURI('www.google.com')).toBe(true);
        expect(isValidURI('http://www.google.com')).toBe(true);
        expect(isValidURI('https://www.google.com')).toBe(true);
        expect(isValidURI('http://google.com')).toBe(true);
        expect(isValidURI('google.com')).toBe(false);
        expect(isValidURI('www.google.co.uk')).toBe(true);
        expect(isValidURI('https://dashboard.sportsads.nl/user/login')).toBe(true);
    });

    test('isValidColor', () => {
        expect(isValidColor('#000')).toBe(true);
        expect(isValidColor('#FFFFFF')).toBe(true);
        expect(isValidColor('#808080')).toBe(true);
        expect(isValidColor('#808')).toBe(true);
        expect(isValidColor('#8A2BE2')).toBe(true);
        expect(isValidColor('#8080')).toBe(false);
        expect(isValidColor('8A2BE2')).toBe(false);
    });
});
