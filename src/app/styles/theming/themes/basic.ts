import { Theme, ThemeTextStylesMap } from '../../../types';
import mapArrayToObject from '../../../utils/mapArrayToObject';

/* eslint-disable sort-keys */
const shades = {
    one: '#002451',
    two: '#324F73',
    three: '#647B96',
    four: '#96A5B8',
    five: '#BFC8D3',
    six: '#E5E9ED',
    seven: '#F2F4F6',
    eight: '#FAFBFC',
    nine: '#FFFFFF',
    ten: '#9BA1C9',
};
/* eslint-enable sort-keys */

const background = {
    primary: shades.eight,
    primaryLight: shades.ten,
    secondary: shades.nine,
    secondaryLight: shades.eight,
};

const colorAlert = '#EB6500';
const colorDisabled = shades.five;
const colorInactive = shades.seven; // Can be seen as resting mode
const colorInvalid = '#F94E4E';
const colorPrimary = '#3D4A9A';
const colorPrimaryLight = shades.ten;
const colorSecondary = '#009FFD';
const colorSecondaryLight = '#80CFFE';
const colorTertiary = '#80CFFE';
const colorValid = '#2DD67B';
const colorYellow = '#F8C433';

const colorText = {
    primary: colorPrimary,
    secondary: colorSecondary,
};

const colorTextContrast = {
    primary: shades.nine,
    primaryLight: shades.ten,
};

const fontFamilyPrimaryDefinition = "'Open Sans', arial, sans-serif";
const fontFamilySecondaryDefinition = "'Exo 2', sans-serif";

const hover = {
    backgroundColor: background.primary,
};

/* eslint-disable sort-keys */
export const themeBasicDefinition = (fontFamilyPrimary: string, fontFamilySecondary: string): Theme => ({
    card: {
        backgroundColor: shades.nine,
    },
    overlay: {
        backgroundColor: shades.one,
    },
    colorAlert,
    colorDisabled,
    colorInactive,
    colorInvalid,
    colorPrimary,
    colorPrimaryLight,
    colorSecondary,
    colorSecondaryLight,
    colorTertiary,
    colorValid,
    colorYellow,
    background,
    button: {
        danger: {
            backgroundColor: {
                disabled: colorDisabled,
                focus: colorInvalid,
                focusInverted: colorInvalid,
                hover: '#000001',
                hoverInverted: '#000001',
                inverted: colorInvalid,
                loader: colorTextContrast.primary,
                loaderInverted: colorTextContrast.primary,
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
                disabled: shades.nine,
                hover: shades.nine,
                hoverInverted: shades.nine,
                inverted: shades.nine,
                primary: shades.nine,
            },
        },
        primary: {
            backgroundColor: {
                disabled: colorDisabled,
                focus: colorSecondary,
                focusInverted: colorSecondary,
                hover: colorSecondaryLight,
                hoverInverted: colorSecondaryLight,
                inverted: colorSecondary,
                loader: colorTextContrast.primary,
                loaderInverted: colorTextContrast.primary,
                primary: colorSecondary,
            },
            border: {
                focus: colorSecondaryLight,
                focusInverted: colorSecondaryLight,
                hover: colorSecondaryLight,
                hoverInverted: colorSecondaryLight,
                inverted: colorSecondary,
                primary: colorSecondary,
            },
            color: {
                disabled: shades.nine,
                hover: shades.nine,
                hoverInverted: shades.nine,
                inverted: shades.nine,
                primary: shades.nine,
            },
        },
        primaryLight: {
            backgroundColor: {
                disabled: colorDisabled,
                focus: colorSecondary,
                focusInverted: colorSecondary,
                hover: colorSecondaryLight,
                hoverInverted: colorSecondaryLight,
                inverted: colorSecondary,
                loader: colorTextContrast.primaryLight,
                loaderInverted: colorTextContrast.primaryLight,
                primary: colorSecondary,
            },
            border: {
                focus: colorSecondaryLight,
                focusInverted: colorSecondaryLight,
                hover: colorSecondaryLight,
                hoverInverted: colorSecondaryLight,
                inverted: colorSecondary,
                primary: colorSecondary,
            },
            color: {
                disabled: shades.nine,
                hover: shades.nine,
                hoverInverted: shades.nine,
                inverted: shades.nine,
                primary: shades.nine,
            },
        },
        secondary: {
            backgroundColor: {
                disabled: colorDisabled,
                focus: colorPrimary,
                focusInverted: shades.nine,
                hover: '#9BA1C9',
                hoverInverted: shades.nine,
                inverted: shades.nine,
                loader: shades.nine,
                loaderInverted: colorPrimary,
                primary: colorPrimary,
            },
            border: {
                focus: '#9BA1C9',
                focusInverted: '#9BA1C9',
                hover: '#9BA1C9',
                hoverInverted: shades.nine,
                inverted: shades.nine,
                primary: colorPrimary,
            },
            color: {
                disabled: shades.nine,
                hover: shades.nine,
                hoverInverted: colorSecondary,
                inverted: colorPrimary,
                primary: shades.nine,
            },
        },
        secondaryLight: {
            backgroundColor: {
                disabled: shades.nine,
                focus: '#CCCFE3',
                focusInverted: colorPrimary,
                hover: shades.nine,
                hoverInverted: colorSecondary,
                inverted: colorPrimary,
                loader: colorPrimary,
                loaderInverted: shades.nine,
                primary: shades.nine,
            },
            border: {
                focus: colorPrimary,
                focusInverted: shades.nine,
                hover: colorSecondary,
                hoverInverted: shades.nine,
                inverted: shades.nine,
                primary: colorPrimary,
            },
            color: {
                disabled: colorDisabled,
                hover: colorSecondary,
                hoverInverted: shades.nine,
                inverted: shades.nine,
                primary: colorPrimary,
            },
        },
        textOnly: {
            disabled: colorDisabled,
            disabledInverted: shades.seven,
            hover: colorSecondary,
            hoverInverted: colorSecondary,
            inverted: shades.nine,
            loader: shades.one,
            loaderInverted: shades.nine,
            primary: colorPrimary,
        },
    },
    colorText,
    colorTextBody: {
        primary: shades.one,
        secondary: shades.three,
    },
    colorTextContrast,
    datePicker: {
        backgroundColor: shades.nine,
        color: colorPrimary,
        day: {
            accent: colorPrimary,
            backgroundColor: shades.seven,
            color: shades.one,
            disabled: {
                backgroundColor: shades.eight,
                color: colorDisabled,
            },
            hover: {
                accent: colorSecondary,
                backgroundColor: colorPrimary,
                color: shades.nine,
            },
            selected: {
                backgroundColor: colorSecondary,
                color: shades.nine,
            },
            selectionLimit: {
                backgroundColor: colorSecondary,
                color: shades.nine,
            },
        },
    },
    fontFamilyPrimary,
    fontFamilySecondary,
    header: {
        backgroundColor: {
            primary: colorPrimary,
            secondary: shades.nine,
        },
    },
    hover,
    loader: {
        primary: colorText.primary,
        secondary: colorTextContrast.primary,
    },
    shades,
    spacingValue: 8,
    table: {
        footer: {
            backgroundColor: shades.seven,
        },
        row: {
            backgroundColorEven: hover.backgroundColor,
            backgroundColorOdd: shades.nine,
            borderColorRowSelector: shades.five,
            borderColorRowSelectorDisabled: colorDisabled,
        },
    },
    textStyles: {
        body1: {
            fontFamily: fontFamilyPrimary,
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '22px',
        },
        body2: {
            fontFamily: fontFamilyPrimary,
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '18px',
        },
        buttonLarge: {
            fontFamily: fontFamilySecondary,
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
        },
        buttonMedium: {
            fontFamily: fontFamilySecondary,
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '22px',
        },
        buttonSmall: {
            fontFamily: fontFamilySecondary,
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '22px',
        },
        caption: {
            fontFamily: fontFamilyPrimary,
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '16px',
        },
        caption2: {
            fontFamily: fontFamilySecondary,
            fontSize: '14px',
            fontWeight: '600',
            lineHeight: '22px',
        },
        h1: {
            fontFamily: fontFamilySecondary,
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '34px',
        },
        h2: {
            fontFamily: fontFamilySecondary,
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '28px',
        },
        h3: {
            fontFamily: fontFamilySecondary,
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '24px',
        },
    },
    availableTextStyles() {
        return mapArrayToObject(Object.keys(this.textStyles)) as ThemeTextStylesMap;
    },
    spacing(factor1, factor2, factor3, factor4, ...rest) {
        let css = '';

        if (typeof this.spacingValue !== 'number') {
            throw Error(`The spacing value should a be number instead of a ${typeof this.spacingValue}`);
        }

        if (rest.length) {
            throw Error('The spacing function expects between one and four arguments.');
        }

        if (factor1 === undefined) {
            throw Error('You should pass at least one factor.');
        } else {
            css += `${this.spacingValue * factor1}px`;
        }

        if (factor2 !== undefined) {
            css += ` ${this.spacingValue * factor2}px`;
        }

        if (factor3 !== undefined) {
            css += ` ${this.spacingValue * factor3}px`;
        }

        if (factor4 !== undefined) {
            css += ` ${this.spacingValue * factor4}px`;
        }

        return css;
    },
    textStyling(textStyleSelector = 'body1') {
        const validTextStylingSelectors = Object.keys(this.textStyles);

        if (!validTextStylingSelectors.includes(textStyleSelector)) {
            throw new Error(
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                `${textStyleSelector} is not a valid text styling selector. Please use one the following: ${validTextStylingSelectors}`
            );
        }

        const textStyle = this.textStyles[textStyleSelector];

        return `
            line-height: ${textStyle.lineHeight};
            font-family: ${textStyle.fontFamily};
            font-size: ${textStyle.fontSize};
            font-weight: ${textStyle.fontWeight};
        `;
    },
});
/* eslint-enable sort-keys */

export const themeBasic: Theme = themeBasicDefinition(fontFamilyPrimaryDefinition, fontFamilySecondaryDefinition);
