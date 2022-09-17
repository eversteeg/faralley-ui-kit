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
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm',
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
    },
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    ordinal(e: number) {
        const a = e % 10;

        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, no-nested-ternary, no-bitwise
        return e + (~~((e % 100) / 10) === 1 ? 'th' : a === 1 ? 'st' : a === 2 ? 'nd' : a === 3 ? 'rd' : 'th');
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
