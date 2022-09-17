import { themeBasic, themeBasicDefinition } from './basic';
import { createDuiTheme } from '../createDuiTheme';
import { Theme } from '../../../types';

/* Some additional colors for the dark theme */
const colorHeaderPrimary = '#002451';
const colorHeaderSecondary = '#647B96';
const colorShadeTen = '#333';
const colorShadeEleven = '#222';

/* eslint-disable sort-keys */
// Fetch the temporary values for further overriding
const themeDarkValues = createDuiTheme(
    themeBasicDefinition(themeBasic.fontFamilyPrimary, themeBasic.fontFamilySecondary),
    {
        shades: {
            one: '#FFFFFF',
            two: '#888',
            three: '#777',
            four: '#666',
            five: '#555',
            six: '#444',
            seven: '#191919',
            eight: '#050505',
            nine: '#000000',
            ten: '#9BA1C9',
        },
        colorPrimary: '#FFFFFF',
        colorSecondary: '#009FFD',
        colorSecondaryLight: '#80CFFE',
        colorTertiary: '#80CFFE',
    }
);

export const themeDark: Theme = {
    ...themeDarkValues,

    colorDisabled: themeDarkValues.shades.six,
    colorInactive: themeDarkValues.shades.six,

    colorTextContrast: {
        primary: themeDarkValues.shades.one,
        primaryLight: themeDarkValues.shades.ten,
    },

    colorText: {
        primary: themeDarkValues.colorPrimary,
        secondary: themeDarkValues.colorSecondary,
    },

    colorTextBody: {
        primary: themeDarkValues.shades.one,
        secondary: themeDarkValues.shades.three,
    },

    background: {
        primary: themeDarkValues.shades.eight,
        secondary: themeDarkValues.shades.nine,
        secondaryLight: themeDarkValues.shades.eight,
    },

    button: {
        danger: {
            backgroundColor: {
                disabled: themeDarkValues.colorDisabled,
                focus: themeDarkValues.colorInvalid,
                focusInverted: themeDarkValues.colorInvalid,
                hover: themeDarkValues.colorPrimary,
                hoverInverted: themeDarkValues.colorPrimary,
                inverted: themeDarkValues.colorInvalid,
                loader: themeDarkValues.colorTextContrast.primary,
                loaderInverted: themeDarkValues.colorTextContrast.primary,
                primary: themeDarkValues.colorInvalid,
            },
            border: {
                focus: '#FB8989',
                focusInverted: '#FB8989',
                hover: '#000001',
                hoverInverted: '#000001',
                inverted: themeDarkValues.colorInvalid,
                primary: themeDarkValues.colorInvalid,
            },
            color: {
                disabled: themeDarkValues.colorPrimary,
                hover: themeDarkValues.shades.nine,
                hoverInverted: themeDarkValues.shades.nine,
                inverted: themeDarkValues.colorPrimary,
                primary: themeDarkValues.colorPrimary,
            },
        },
        primary: {
            backgroundColor: {
                disabled: themeDarkValues.colorDisabled,
                focus: themeDarkValues.shades.six,
                focusInverted: themeDarkValues.shades.six,
                hover: themeDarkValues.colorSecondary,
                hoverInverted: themeDarkValues.colorSecondary,
                inverted: themeDarkValues.shades.five,
                loader: themeDarkValues.colorPrimary,
                loaderInverted: themeDarkValues.colorPrimary,
                primary: colorHeaderPrimary,
            },
            border: {
                focus: themeDarkValues.colorSecondaryLight,
                focusInverted: themeDarkValues.colorSecondaryLight,
                hover: themeDarkValues.colorSecondaryLight,
                hoverInverted: themeDarkValues.colorSecondaryLight,
                inverted: themeDarkValues.colorSecondary,
                primary: themeDarkValues.colorSecondary,
            },
            color: {
                disabled: themeDarkValues.shades.two,
                hover: themeDarkValues.colorPrimary,
                hoverInverted: themeDarkValues.colorPrimary,
                inverted: themeDarkValues.colorPrimary,
                primary: themeDarkValues.colorPrimary,
            },
        },
        primaryLight: {
            backgroundColor: {
                disabled: themeDarkValues.colorDisabled,
                focus: themeDarkValues.shades.six,
                focusInverted: themeDarkValues.shades.six,
                hover: themeDarkValues.colorSecondary,
                hoverInverted: themeDarkValues.colorSecondary,
                inverted: themeDarkValues.shades.five,
                loader: themeDarkValues.colorPrimaryLight,
                loaderInverted: themeDarkValues.colorPrimaryLight,
                primary: colorHeaderPrimary,
            },
            border: {
                focus: themeDarkValues.colorSecondaryLight,
                focusInverted: themeDarkValues.colorSecondaryLight,
                hover: themeDarkValues.colorSecondaryLight,
                hoverInverted: themeDarkValues.colorSecondaryLight,
                inverted: themeDarkValues.colorSecondary,
                primary: themeDarkValues.colorSecondary,
            },
            color: {
                disabled: themeDarkValues.shades.two,
                hover: themeDarkValues.colorPrimary,
                hoverInverted: themeDarkValues.colorPrimary,
                inverted: themeDarkValues.colorPrimary,
                primary: themeDarkValues.colorPrimary,
            },
        },
        secondary: {
            backgroundColor: {
                disabled: colorShadeTen,
                focus: themeDarkValues.shades.two,
                focusInverted: themeDarkValues.shades.one,
                hover: themeDarkValues.shades.three,
                hoverInverted: themeDarkValues.colorSecondary,
                inverted: themeDarkValues.colorPrimary,
                loader: themeDarkValues.colorPrimary,
                loaderInverted: themeDarkValues.shades.nine,
                primary: themeDarkValues.shades.five,
            },
            border: {
                focus: themeDarkValues.shades.three,
                focusInverted: themeDarkValues.shades.three,
                hover: themeDarkValues.shades.three,
                hoverInverted: themeDarkValues.shades.one,
                inverted: themeDarkValues.shades.one,
                primary: themeDarkValues.shades.five,
            },
            color: {
                disabled: themeDarkValues.colorDisabled,
                hover: themeDarkValues.colorPrimary,
                hoverInverted: themeDarkValues.shades.eight,
                inverted: themeDarkValues.shades.nine,
                primary: themeDarkValues.colorPrimary,
            },
        },
        secondaryLight: {
            backgroundColor: {
                disabled: themeDarkValues.shades.nine,
                focus: '#CCCFE3',
                focusInverted: themeDarkValues.colorPrimary,
                hover: themeDarkValues.shades.nine,
                hoverInverted: themeDarkValues.colorSecondary,
                inverted: themeDarkValues.colorPrimary,
                loader: themeDarkValues.colorPrimary,
                loaderInverted: themeDarkValues.shades.nine,
                primary: themeDarkValues.shades.nine,
            },
            border: {
                focus: themeDarkValues.colorPrimary,
                focusInverted: themeDarkValues.shades.nine,
                hover: themeDarkValues.colorSecondary,
                hoverInverted: themeDarkValues.shades.nine,
                inverted: themeDarkValues.shades.nine,
                primary: themeDarkValues.colorPrimary,
            },
            color: {
                disabled: themeDarkValues.colorDisabled,
                hover: themeDarkValues.colorSecondary,
                hoverInverted: themeDarkValues.shades.nine,
                inverted: themeDarkValues.shades.nine,
                primary: themeDarkValues.colorPrimary,
            },
        },
        textOnly: {
            disabled: colorShadeTen,
            disabledInverted: themeDarkValues.shades.two,
            hover: themeDarkValues.colorSecondary,
            hoverInverted: themeDarkValues.colorSecondary,
            inverted: themeDarkValues.colorPrimary,
            loader: themeDarkValues.colorPrimary,
            loaderInverted: themeDarkValues.colorPrimary,
            primary: themeDarkValues.colorPrimary,
        },
    },

    card: {
        backgroundColor: colorShadeEleven,
    },
    overlay: {
        backgroundColor: themeDarkValues.shades.nine,
    },

    datePicker: {
        backgroundColor: colorShadeEleven,
        color: themeDarkValues.colorPrimary,
        day: {
            accent: themeDarkValues.colorPrimary,
            backgroundColor: themeDarkValues.shades.seven,
            color: themeDarkValues.colorText.primary,
            disabled: {
                backgroundColor: themeDarkValues.shades.eight,
                color: colorShadeTen,
            },
            hover: {
                accent: themeDarkValues.colorSecondary,
                backgroundColor: colorHeaderSecondary,
                color: themeDarkValues.colorText.primary,
            },
            selected: {
                backgroundColor: themeDarkValues.colorSecondary,
                color: themeDarkValues.colorText.primary,
            },
            selectionLimit: {
                backgroundColor: themeDarkValues.colorSecondary,
                color: themeDarkValues.colorText.primary,
            },
        },
    },

    header: {
        backgroundColor: {
            primary: colorHeaderPrimary,
            secondary: colorHeaderSecondary,
        },
    },

    hover: {
        backgroundColor: themeDarkValues.shades.seven,
    },

    loader: {
        primary: themeDarkValues.colorText.primary,
        secondary: themeDarkValues.colorTextContrast.primary,
    },

    table: {
        footer: {
            backgroundColor: themeDarkValues.shades.seven,
        },
        row: {
            backgroundColorOdd: colorShadeEleven,
            backgroundColorEven: themeDarkValues.shades.seven,
            borderColorRowSelector: themeDarkValues.shades.five,
            borderColorRowSelectorDisabled: themeDarkValues.colorDisabled,
        },
    },
};
