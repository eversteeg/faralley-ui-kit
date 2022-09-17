/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const monthsParse = [
    /^янв/i,
    /^фев/i,
    /^мар/i,
    /^апр/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^авг/i,
    /^сен/i,
    /^окт/i,
    /^ноя/i,
    /^дек/i,
];

export default {
    calendar: {
        lastDay: '[Вчера, в] LT',
        lastWeek: '[В прошлое] dddd, [в] LT',
        nextDay: '[Завтра, в] LT',
        nextWeek: '[В следующее] dddd, [в] LT',
        sameDay: '[Сегодня, в] LT',
        sameElse: 'L',
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    isPM(e: string) {
        return /^(дня|вечера)$/.test(e);
    },
    longDateFormat: {
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm',
        LT: 'HH:mm',
        LTS: 'H:mm:ss',
    },
    longMonthsParse: monthsParse,
    meridiem(e: number) {
        // eslint-disable-next-line no-nested-ternary
        return e < 4 ? 'ночи' : e < 12 ? 'утра' : e < 17 ? 'дня' : 'вечера';
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
    },
    monthsParse,
    monthsParseExact: true,
    monthsRegex:
        /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    monthsShort: {
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_'),
    },
    monthsShortRegex:
        /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    monthsShortStrictRegex:
        /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    monthsStrictRegex:
        /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    ordinal(e: number) {
        return `${e}-й`;
    },
    relativeTime: {
        M: 'минута',
        MM: '%d месяц',
        d: 'день',
        dd: '%d дней',
        future: 'через %s',
        h: 'час',
        hh: '%d часов',
        m: 'минута',
        mm: '%d минуты',
        past: '%s назад',
        s: 'несколько секунд',
        y: 'год',
        yy: '%d год',
    },
    shortMonthsParse: monthsParse,
    week: {
        dow: 1,
        doy: 4,
    },
    weekdays: {
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
    },
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysParseExact: true,
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
};
