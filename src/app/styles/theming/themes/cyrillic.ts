/* eslint-disable sort-keys */
import { createDuiTheme } from '../createDuiTheme';
import { Theme } from '../../../types';
import { themeBasicDefinition } from './basic';

const colorAlert = '#EB6500';
const colorInvalid = '#F94E4E';
const colorValid = '#2DD67B';
const fontFamilyPrimary = 'Cuprum, Arial, sans-serif';
const fontFamilySecondary = "'Fira Sans Condensed', Arial, sans-serif";

const themeCyrillicValues: Theme = createDuiTheme(themeBasicDefinition(fontFamilyPrimary, fontFamilySecondary), {
    shades: {
        one: '#647B96',
        two: '#324F73',
        three: '#647B96',
        four: '#96A5B8',
        five: '#BFC8D3',
        six: '#E5E9ED',
        seven: '#F2F4F6',
        eight: '#FAFBFC',
        nine: '#FFFFFF',
        ten: '#9BA1C9',
    },
    colorAlert,
    colorInvalid,
    colorPrimary: '#647B96',
    colorPrimaryLight: '#9BA1C9',
    colorSecondary: '#009FFD',
    colorSecondaryLight: '#D6D6D6',
    colorTertiary: '#D6D6D6',
    colorValid,
    fontFamilyPrimary,
    fontFamilySecondary,
});

/* eslint-disable sort-keys */
export const themeCyrillic: Theme = {
    ...themeCyrillicValues,

    colorDisabled: themeCyrillicValues.shades.six,
    colorInactive: themeCyrillicValues.shades.six,

    colorTextContrast: {
        primary: themeCyrillicValues.shades.nine,
        primaryLight: themeCyrillicValues.shades.ten,
    },

    colorText: {
        primary: themeCyrillicValues.colorPrimary,
        secondary: themeCyrillicValues.colorSecondary,
    },

    colorTextBody: {
        primary: themeCyrillicValues.shades.one,
        secondary: themeCyrillicValues.shades.three,
    },

    background: {
        primary: themeCyrillicValues.shades.nine,
        secondary: themeCyrillicValues.shades.eight,
        secondaryLight: themeCyrillicValues.shades.seven,
    },

    button: {
        danger: {
            backgroundColor: {
                disabled: themeCyrillicValues.colorDisabled,
                focus: colorInvalid,
                focusInverted: colorInvalid,
                hover: '#000001',
                hoverInverted: '#000001',
                inverted: colorInvalid,
                loader: themeCyrillicValues.colorTextContrast.primary,
                loaderInverted: themeCyrillicValues.colorTextContrast.primary,
                primary: colorInvalid,
            },
            border: {
                focus: '#FB8989',
                focusInverted: '#FB8989',
                hover: '#000001',
                hoverInverted: '#000001',
                inverted: colorInvalid,
                primary: colorInvalid,
            },
            color: {
                disabled: themeCyrillicValues.shades.nine,
                hover: themeCyrillicValues.shades.nine,
                hoverInverted: themeCyrillicValues.shades.nine,
                inverted: themeCyrillicValues.shades.nine,
                primary: themeCyrillicValues.shades.nine,
            },
        },
        primary: {
            backgroundColor: {
                disabled: themeCyrillicValues.colorDisabled,
                focus: themeCyrillicValues.colorSecondary,
                focusInverted: themeCyrillicValues.shades.seven,
                hover: themeCyrillicValues.shades.four,
                hoverInverted: themeCyrillicValues.shades.nine,
                inverted: themeCyrillicValues.shades.nine,
                loader: themeCyrillicValues.colorTextContrast.primary,
                loaderInverted: themeCyrillicValues.colorPrimary,
                primary: themeCyrillicValues.colorPrimary,
            },
            border: {
                focus: themeCyrillicValues.colorSecondaryLight,
                focusInverted: themeCyrillicValues.colorSecondaryLight,
                hover: themeCyrillicValues.shades.nine,
                hoverInverted: themeCyrillicValues.colorSecondaryLight,
                inverted: themeCyrillicValues.colorPrimary,
                primary: themeCyrillicValues.colorPrimary,
            },
            color: {
                disabled: themeCyrillicValues.shades.nine,
                hover: themeCyrillicValues.shades.nine,
                hoverInverted: themeCyrillicValues.colorSecondaryLight,
                inverted: themeCyrillicValues.colorPrimary,
                primary: themeCyrillicValues.shades.nine,
            },
        },
        primaryLight: {
            backgroundColor: {
                disabled: themeCyrillicValues.colorDisabled,
                focus: themeCyrillicValues.colorSecondary,
                focusInverted: themeCyrillicValues.shades.seven,
                hover: themeCyrillicValues.shades.four,
                hoverInverted: themeCyrillicValues.shades.nine,
                inverted: themeCyrillicValues.shades.nine,
                loader: themeCyrillicValues.colorTextContrast.primaryLight,
                loaderInverted: themeCyrillicValues.colorPrimaryLight,
                primary: themeCyrillicValues.colorPrimary,
            },
            border: {
                focus: themeCyrillicValues.colorSecondaryLight,
                focusInverted: themeCyrillicValues.colorSecondaryLight,
                hover: themeCyrillicValues.shades.nine,
                hoverInverted: themeCyrillicValues.colorSecondaryLight,
                inverted: themeCyrillicValues.colorPrimary,
                primary: themeCyrillicValues.colorPrimary,
            },
            color: {
                disabled: themeCyrillicValues.shades.nine,
                hover: themeCyrillicValues.shades.nine,
                hoverInverted: themeCyrillicValues.colorSecondaryLight,
                inverted: themeCyrillicValues.colorPrimary,
                primary: themeCyrillicValues.shades.nine,
            },
        },
        secondary: {
            backgroundColor: {
                disabled: themeCyrillicValues.colorDisabled,
                focus: themeCyrillicValues.shades.two,
                focusInverted: themeCyrillicValues.shades.five,
                hover: themeCyrillicValues.shades.five,
                hoverInverted: themeCyrillicValues.shades.three,
                inverted: themeCyrillicValues.shades.nine,
                loader: themeCyrillicValues.shades.nine,
                loaderInverted: themeCyrillicValues.shades.four,
                primary: themeCyrillicValues.shades.four,
            },
            border: {
                focus: '#9BA1C9',
                focusInverted: '#9BA1C9',
                hover: themeCyrillicValues.shades.four,
                hoverInverted: themeCyrillicValues.shades.four,
                inverted: themeCyrillicValues.shades.four,
                primary: themeCyrillicValues.shades.four,
            },
            color: {
                disabled: themeCyrillicValues.shades.nine,
                hover: themeCyrillicValues.shades.nine,
                hoverInverted: themeCyrillicValues.shades.nine,
                inverted: themeCyrillicValues.shades.four,
                primary: themeCyrillicValues.shades.nine,
            },
        },
        secondaryLight: {
            backgroundColor: {
                disabled: themeCyrillicValues.shades.nine,
                focus: '#CCCFE3',
                focusInverted: themeCyrillicValues.colorPrimary,
                hover: themeCyrillicValues.shades.nine,
                hoverInverted: themeCyrillicValues.colorSecondary,
                inverted: themeCyrillicValues.colorPrimary,
                loader: themeCyrillicValues.colorPrimary,
                loaderInverted: themeCyrillicValues.shades.nine,
                primary: themeCyrillicValues.shades.nine,
            },
            border: {
                focus: themeCyrillicValues.colorPrimary,
                focusInverted: themeCyrillicValues.shades.nine,
                hover: themeCyrillicValues.colorSecondary,
                hoverInverted: themeCyrillicValues.shades.nine,
                inverted: themeCyrillicValues.shades.nine,
                primary: themeCyrillicValues.colorPrimary,
            },
            color: {
                disabled: themeCyrillicValues.colorDisabled,
                hover: themeCyrillicValues.colorSecondary,
                hoverInverted: themeCyrillicValues.shades.nine,
                inverted: themeCyrillicValues.shades.nine,
                primary: themeCyrillicValues.colorPrimary,
            },
        },
        textOnly: {
            disabled: themeCyrillicValues.colorDisabled,
            disabledInverted: themeCyrillicValues.shades.four,
            hover: themeCyrillicValues.shades.four,
            hoverInverted: themeCyrillicValues.colorSecondary,
            inverted: themeCyrillicValues.shades.nine,
            loader: themeCyrillicValues.shades.one,
            loaderInverted: themeCyrillicValues.shades.nine,
            primary: themeCyrillicValues.colorPrimary,
        },
    },

    card: {
        backgroundColor: themeCyrillicValues.shades.nine,
    },
    overlay: {
        backgroundColor: '#000000',
    },

    datePicker: {
        backgroundColor: themeCyrillicValues.shades.nine,
        color: themeCyrillicValues.colorPrimary,
        day: {
            accent: themeCyrillicValues.colorPrimary,
            backgroundColor: themeCyrillicValues.shades.seven,
            color: themeCyrillicValues.shades.one,
            disabled: {
                backgroundColor: themeCyrillicValues.shades.eight,
                color: themeCyrillicValues.colorDisabled,
            },
            hover: {
                accent: themeCyrillicValues.colorSecondary,
                backgroundColor: themeCyrillicValues.colorPrimary,
                color: themeCyrillicValues.shades.nine,
            },
            selected: {
                backgroundColor: themeCyrillicValues.colorSecondary,
                color: themeCyrillicValues.shades.nine,
            },
            selectionLimit: {
                backgroundColor: themeCyrillicValues.colorSecondary,
                color: themeCyrillicValues.shades.nine,
            },
        },
    },

    header: {
        backgroundColor: {
            primary: themeCyrillicValues.colorPrimary,
            secondary: themeCyrillicValues.shades.nine,
        },
    },

    hover: {
        backgroundColor: themeCyrillicValues.colorSecondaryLight,
    },

    loader: {
        primary: themeCyrillicValues.colorText.primary,
        secondary: themeCyrillicValues.colorTextContrast.primary,
    },

    table: {
        footer: {
            backgroundColor: themeCyrillicValues.shades.seven,
        },
        row: {
            backgroundColorEven: themeCyrillicValues.hover.backgroundColor,
            backgroundColorOdd: themeCyrillicValues.shades.nine,
            borderColorRowSelector: themeCyrillicValues.shades.five,
            borderColorRowSelectorDisabled: themeCyrillicValues.shades.six,
        },
    },
};
/* eslint-enable */
