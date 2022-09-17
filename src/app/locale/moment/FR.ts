/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
    calendar: {
        lastDay: '[Hier sur] LT',
        lastWeek: 'dddd [le dernier à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [sur] LT',
        sameDay: '[Aujourd’hui à] LT', // todat at
        sameElse: 'L',
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    longDateFormat: {
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm',
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
    },
    meridiem(hours: number) {
        return hours < 12 ? 'PD' : 'MD';
    },
    meridiemParse: /PD|MD/,
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    ordinal(number: number) {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        return number + (number === 1 ? 'er' : 'e');
    },
    relativeTime: {
        M: 'un mois',
        MM: '%d mois',
        d: 'un jour',
        dd: '%d jours',
        future: 'dans %s',
        h: 'une heure',
        hh: '%d heures',
        m: 'une minute',
        mm: '%d minutes',
        past: 'il y a %s',
        s: 'quelques secondes',
        ss: '%d secondes',
        w: 'une semaine',
        ww: '%d semaines',
        y: 'un an',
        yy: '%d ans',
    },
    week: {
        dow: 1,
        doy: 4,
    },
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysMin: 'Dim_Lun_Mar_Mer_Jeu_Ven_Sam'.split('_'),
    weekdaysParseExact: true,
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
};
