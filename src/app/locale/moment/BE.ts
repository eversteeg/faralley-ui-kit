/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default {
    calendar: {
        lastDay: '[Учора ў] LT',
        lastWeek: '[У мінулы] dddd [ў] LT',
        nextDay: '[Заўтра ў] LT',
        nextWeek: '[У] dddd [ў] LT',
        sameDay: '[Сёння ў] LT',
        sameElse: 'L',
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
    isPM(e: string) {
        return /^(дня|вечара)$/.test(e);
    },
    longDateFormat: {
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., HH:mm',
        LLLL: 'dddd, D MMMM YYYY г., HH:mm',
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
    },
    meridiem(e: number) {
        // eslint-disable-next-line no-nested-ternary
        return e < 4 ? 'ночы' : e < 12 ? 'раніцы' : e < 17 ? 'дня' : 'вечара';
    },
    meridiemParse: /ночы|раніцы|дня|вечара/,
    months: {
        format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split(
            '_'
        ),
        standalone:
            'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split(
                '_'
            ),
    },
    monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
    ordinal(e: number) {
        return (e % 10 !== 2 && e % 10 !== 3) || e % 100 === 12 || e % 100 === 13 ? `${e}-ы` : `${e}-і`;
    },
    relativeTime: {
        M: 'месяц',
        MM: 'месяц_месяцы_месяцаў',
        d: 'дзень',
        dd: 'дзень_дні_дзён',
        future: 'праз %s',
        h: 'гадзіна',
        hh: 'гадзіна_гадзіны_гадзін',
        m: 'хвіліна',
        mm: 'хвіліна_хвіліны_хвілін',
        past: '%s таму',
        s: 'некалькі секунд',
        y: 'год',
        yy: 'год_гады_гадоў',
    },
    week: {
        dow: 1,
        doy: 7,
    },
    weekdays: {
        format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
        isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
        standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
    },
    weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
};
