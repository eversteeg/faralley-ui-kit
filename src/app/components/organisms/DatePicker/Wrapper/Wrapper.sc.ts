import styled, { css, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../../types';
import { getElevation } from '../../../../styles/mixins/getElevation';
import { hexToRgb } from '../../../../utils/functions/colorFunctions';
import { setBoxSizing } from '../../../../styles/mixins/setBoxSizing';
import { setTruncate } from '../../../../styles/mixins/setTruncate';
import { StyledInputIcon } from '../InputIcon/InputIcon.sc';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface StyledWrapperProps {
    hasError: boolean;
    hasYearSelector: boolean;
    isFocused: boolean;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    ${setBoxSizing()}
    position: relative;

    /* Input styling */
    .DateRangePickerInput,
    .SingleDatePickerInput {
        outline: none;
        border: 1px solid ${({ theme }): string => theme.colorPrimary};
        border-radius: ${({ theme }): string => theme.spacing(1)};
        background-color: transparent;
        padding: ${({ theme }): string => theme.spacing(0, 6, 0, 1.5)};
        height: ${({ theme }): string => theme.spacing(6)};
        overflow: hidden;

        ${({ isFocused, theme }): SimpleInterpolation =>
            isFocused &&
            css`
                border-color: ${theme.colorSecondary};
            `}

        &:hover {
            border-color: ${({ hasError, theme }): string => (hasError ? theme.colorInvalid : theme.colorSecondary)};
        }
    }

    .DateRangePickerInput:not(.DateRangePickerInput__disabled):hover,
    .SingleDatePickerInput:not(.SingleDatePickerInput__disabled):hover {
        ${StyledInputIcon} {
            color: ${({ theme }): string => theme.colorSecondary};
        }
    }

    .DateRangePickerInput_calendarIcon,
    .SingleDatePickerInput_calendarIcon {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate3d(0, -50%, 0);
        z-index: 1;
        margin: 0;
        outline: none;
        padding: 0;
    }

    .DateInput {
        display: block;
        background-color: transparent;
        width: 100%;
    }

    .DateInput_input {
        ${setTruncate()}
        ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
        display: block;
        outline: none;
        border: 0;
        background-color: transparent;
        padding: 0;
        height: ${({ theme }): string => `calc(${theme.spacing(6)} - 2px)`};
        color: ${({ theme }): string => theme.shades.one};

        &::placeholder {
            opacity: 1;
            color: ${({ theme }): string => theme.shades.three};
        }
    }

    .DateInput_fang {
        display: none;
    }

    /* Overall styling */
    .DayPicker,
    .DayPicker__withBorder,
    .DayPicker__horizontal,
    .CalendarMonth,
    .CalendarMonthGrid {
        background-color: ${({ theme }): string => `${theme.datePicker.backgroundColor} !important`};
    }

    /* Calendar styling */
    .DateRangePicker,
    .SingleDatePicker {
        display: block;
    }

    .DateRangePicker_picker,
    .SingleDatePicker_picker {
        z-index: 3;
        background-color: transparent;
    }

    .DayPicker__withBorder {
        ${getElevation(Elevation.LEVEL_6)}
        border-radius: ${({ theme }): string => theme.spacing(1)};
        background-color: ${({ theme }): string => theme.datePicker.backgroundColor};
        overflow: hidden;
    }

    .DayPicker_transitionContainer {
        border-radius: ${({ theme }): string => theme.spacing(1)};
    }

    .CalendarMonth_caption {
        padding: ${({ theme }): string => theme.spacing(3, 0, 5.75)};
    }

    .DayPicker_weekHeader {
        top: ${({ hasYearSelector, theme }): string => theme.spacing(hasYearSelector ? 11.5 : 9)};
    }

    .DayPicker_weekHeader_ul {
        margin: 0;
    }

    .DayPicker_weekHeader_li {
        ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
        text-transform: capitalize;
        color: ${({ theme }): string => theme.shades.one};
        font-weight: 600;

        small {
            font-size: inherit;
        }
    }

    .DayPickerNavigation_button {
        outline: none;

        ${({ hasYearSelector }): SimpleInterpolation =>
            hasYearSelector &&
            css`
                display: none;
            `}
    }

    .CalendarMonth,
    .CalendarMonthGrid {
        background-color: ${({ theme }): string => theme.datePicker.backgroundColor};
    }

    .CalendarDay__default {
        ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
        position: relative;
        outline: none;
        border: 1px solid transparent;
        background-color: ${({ theme }): string => theme.datePicker.day.backgroundColor};
        vertical-align: middle;
        color: ${({ theme }): string => theme.datePicker.day.color};

        &:hover {
            background-color: ${({ theme }): string => theme.datePicker.day.hover.backgroundColor};
            color: ${({ theme }): string => theme.datePicker.day.hover.color};
        }

        &.CalendarDay__selected_span {
            background-color: ${({ theme }): string => hexToRgb(theme.datePicker.day.selected.backgroundColor, 0.7)};

            &:hover {
                background-color: ${({ theme }): string => theme.datePicker.day.hover.backgroundColor};
                color: ${({ theme }): string => theme.datePicker.day.hover.color};
            }
        }
    }

    .CalendarDay__today {
        color: ${({ theme }): string => theme.datePicker.day.color};

        &::before {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            background-color: ${({ theme }): string => theme.datePicker.day.accent};
            width: 100%;
            height: 4px;
            content: '';
        }

        &:hover {
            &::before {
                background-color: ${({ theme }): string => theme.datePicker.day.hover.accent};
            }
        }
    }

    .CalendarDay__blocked_calendar {
        background-color: ${({ theme }): string => theme.shades.eight};
        cursor: initial;
        color: ${({ theme }): string => theme.colorDisabled};
        pointer-events: none;
    }

    .CalendarDay__highlighted_calendar {
        &::after {
            display: block;
            position: absolute;
            bottom: 4px;
            left: 18px;
            border-radius: 100%;
            background-color: ${({ theme }): string => theme.datePicker.day.color};
            width: 4px;
            height: 4px;
            content: '';
        }

        &:hover,
        &.CalendarDay__selected,
        &.CalendarDay__selected_span {
            &::after {
                background-color: ${({ theme }): string => theme.datePicker.day.hover.color};
            }
        }
    }

    .CalendarDay__selected,
    .CalendarDay__selected_start,
    .CalendarDay__selected_end {
        background-color: ${({ theme }): string => theme.datePicker.day.selectionLimit.backgroundColor};
        cursor: pointer;
        color: ${({ theme }): string => theme.datePicker.day.selectionLimit.color};
    }

    .CalendarDay__blocked_minimum_nights:not(.CalendarDay__selected_start) {
        pointer-events: none;
    }

    .CalendarDay__blocked_out_of_range,
    .CalendarDay__blocked_out_of_range:hover {
        background-color: ${({ theme }): string => theme.datePicker.day.disabled.backgroundColor};
        color: ${({ theme }): string => theme.datePicker.day.disabled.color};

        &.CalendarDay__highlighted_calendar {
            &::after {
                background-color: ${({ theme }): string => theme.datePicker.day.disabled.backgroundColor};
            }
        }
    }

    .DateRangePickerInput__disabled,
    .SingleDatePickerInput__disabled {
        border-color: ${({ theme }): string => theme.colorDisabled};
        background: none;

        &:hover {
            border-color: ${({ theme }): string => theme.colorDisabled};
        }

        .DateInput {
            background: none;
        }

        .DateInput_input,
        .DateInput_input::placeholder {
            color: ${({ theme }): string => theme.colorDisabled};
            font-style: normal;
        }

        .DateRangePickerInput_calendarIcon,
        .SingleDatePickerInput_calendarIcon {
            cursor: default;
        }
    }
`;

StyledWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledWrapper;
