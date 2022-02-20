import styled, { css, SimpleInterpolation } from 'styled-components';
import { SingleDatePickerVariant } from '../types';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const StyledWrapper = styled.div``;

interface StyledSingleDatePickerProps {
    hasError: boolean;
    isFocused: boolean;
    isTopDatepicker: boolean;
    variant: SingleDatePickerVariant;
}

export const StyledSingleDatePicker = styled.div<StyledSingleDatePickerProps>`
    .SingleDatePickerInput {
        display: block;

        &.SingleDatePickerInput__disabled {
            ${({ theme, variant }): SimpleInterpolation =>
                variant === SingleDatePickerVariant.COMPACT &&
                css`
                    border-color: ${theme.colorDisabled};

                    &::after {
                        background-color: transparent;
                    }
                `}
        }

        ${({ hasError, theme, variant }): SimpleInterpolation =>
            variant === SingleDatePickerVariant.COMPACT &&
            css`
                border: 0;
                border-bottom: 1px solid ${theme.colorPrimary};
                border-radius: 0;
                padding: 0;
                height: ${`calc(${theme.spacing(3)} + 1px)`};

                ${hasError &&
                css`
                    border-color: ${theme.colorInvalid};
                `}
            `}

        ${({ hasError, isFocused, theme, variant }): SimpleInterpolation =>
            variant === SingleDatePickerVariant.COMPACT &&
            css`
                overflow: visible;

                &::after {
                    display: block;
                    content: '';

                    ${isFocused &&
                    css`
                        background-color: ${theme.colorSecondary};
                        height: 2px;
                    `}

                    ${hasError &&
                    css`
                        background-color: ${theme.colorInvalid};
                    `}
                }
            `}

        ${({ hasError, theme, variant }): SimpleInterpolation =>
            variant === SingleDatePickerVariant.OUTLINE &&
            hasError &&
            css`
                border-color: ${theme.colorInvalid};
            `}
    }

    .DateInput_input {
        ${({ theme, variant }): SimpleInterpolation =>
            variant === SingleDatePickerVariant.COMPACT &&
            css`
                height: ${theme.spacing(3)};
            `}
    }

    .SingleDatePicker_picker {
        ${({ isTopDatepicker, variant }): SimpleInterpolation =>
            isTopDatepicker &&
            css`
                margin-bottom: ${variant === SingleDatePickerVariant.COMPACT ? '16px' : '8px'};
            `}
    }
`;

StyledSingleDatePicker.defaultProps = {
    theme: themeBasic,
};
