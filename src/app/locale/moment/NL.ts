/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
    calendar: {
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        sameDay: '[vandaag om] LT',
        sameElse: 'L',
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    longDateFormat: {
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm',
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
    },
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsParseExact: true,
    monthsShort: 'jan._fed._mar._apr._mei._jun._jul._aug_sept._okt._nov._dev.'.split('_'),
    ordinal(number: number) {
        return `${number}${number === 1 || number === 8 || number >= 20 ? 'ste' : 'de'}`;
    },
    relativeTime: {
        M: 'één maand',
        MM: '%d maanden',
        d: 'één dag',
        dd: '%d dagen',
        future: 'over %s',
        h: 'één uur',
        hh: '%d uur',
        m: 'één minuut',
        mm: '%d minuten',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        w: 'één week',
        ww: '%d weken',
        y: 'één jaar',
        yy: '%d jaar',
    },
    week: {
        dow: 1,
        doy: 4,
    },
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    weekdaysShort: 'zon._maa._din._woe._don._vrij._zat.'.split('_'),
};