/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
    calendar: {
        lastDay: '[Вчора] LT',
        lastWeek: '[Минулої] dddd [б] LT',
        nextDay: '[Завтра] LT',
        nextWeek: '[У] dddd [б] LT',
        sameDay: '[Сьогодні] LT',
        sameElse: 'L',
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
    isPM(input: string) {
        return /^(дня|вечора)$/.test(input);
    },
    longDateFormat: {
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY р.',
        LLL: 'D MMMM YYYY р., HH:mm',
        LLLL: 'dddd, D MMMM YYYY р., HH:mm',
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
    },
    meridiem(hours: number) {
        if (hours < 4) {
            return 'ночі';
        }

        if (hours < 12) {
            return 'ранку';
        }

        if (hours < 17) {
            return 'дня';
        }

        return 'вечора';
    },
    meridiemParse: /ночі|ранку|дня|вечора/,
    months: {
        format: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
        standalone:
            'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
    },
    monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    ordinal(number: number) {
        return `${number}-го`;
    },
    relativeTime: {
        M: 'a month',
        MM: '%d months',
        d: 'one day',
        dd: '%d days',
        future: 'in %s',
        h: "one o'clock",
        hh: '%d hours',
        m: 'one minute',
        mm: '%d minutes',
        past: 'there is %s',
        s: 'a few seconds',
        y: 'a year',
        yy: '%d in',
    },
    week: {
        dow: 1,
        doy: 7,
    },
    weekdays: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
};
