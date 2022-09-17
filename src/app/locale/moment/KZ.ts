/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
    calendar: {
        lastDay: '[Кеше сағат] LT',
        lastWeek: '[Өткен аптаның] dddd [сағат] LT',
        nextDay: '[Ертең сағат] LT',
        nextWeek: 'dddd [сағат] LT',
        sameDay: '[Бүгін сағат] LT',
        sameElse: 'L',
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
    longDateFormat: {
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm',
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
    },
    months: 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
    monthsShort: 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
    ordinal(e: number) {
        return `${e}ші`;
    },
    relativeTime: {
        M: 'бір ай',
        MM: '%d ай',
        d: 'бір күн',
        dd: '%d күн',
        future: '%s ішінде',
        h: 'бір сағат',
        hh: '%d сағат',
        m: 'бір минут',
        mm: '%d минут',
        past: '%s бұрын',
        s: 'бірнеше секунд',
        ss: '%d секунд',
        y: 'бір жыл',
        yy: '%d жыл',
    },
    week: {
        dow: 1,
        doy: 7,
    },
    weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
    weekdaysMin: 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
    weekdaysShort: 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
};
