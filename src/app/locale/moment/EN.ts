/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
    calendar: {
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        sameDay: '[Today at] LT',
        sameElse: 'L',
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    longDateFormat: {
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY h:mm A',
        LLLL: 'dddd, D MMMM YYYY h:mm A',
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
    },
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    ordinal(number: number) {
        const b = number % 10;
        // eslint-disable-next-line no-nested-ternary, no-bitwise
        const output = ~~((number % 100) / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';

        return `${number}${output}`;
    },
    relativeTime: {
        M: 'a month',
        MM: '%d months',
        d: 'a day',
        dd: '%d days',
        future: 'in %s',
        h: 'an hour',
        hh: '%d hours',
        m: 'a minute',
        mm: '%d minutes',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        y: 'a year',
        yy: '%d years',
    },
    week: {
        dow: 1,
        doy: 4,
    },
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
};
