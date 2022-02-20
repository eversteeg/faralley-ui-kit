import styled, { css, SimpleInterpolation } from 'styled-components';
import { DropdownVariant } from './types';
import { getBorderColor } from '../../../styles/mixins/getBorderColor';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { setTruncate } from '../../../styles/mixins/setTruncate';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledDropdownProps {
    hasError: boolean;
    isDisabled: boolean;
    isFocused: boolean;
    isValid: boolean;
    variant: DropdownVariant;
}

export const StyledDropdown = styled.div<StyledDropdownProps>`
    ${setBoxSizing()}
    position: relative;

    ${({ hasError, isDisabled, isFocused, isValid, theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.COMPACT &&
        css`
            &::after {
                display: block;
                content: '';

                ${isFocused &&
                css`
                    background-color: ${theme.colorSecondary};
                    height: 1px;
                `}

                ${isValid &&
                css`
                    background-color: ${theme.colorValid};
                `}

                ${hasError &&
                css`
                    background-color: ${theme.colorInvalid};
                `}

                ${isDisabled &&
                css`
                    background-color: transparent;
                `}
            }
        `}
`;

StyledDropdown.defaultProps = {
    theme: themeBasic,
};

interface SelectProps extends StyledDropdownProps {
    isEmpty: boolean;
    isHovered: boolean;
    isPlaceholderSelected: boolean;
    variant: DropdownVariant;
}

export const Select = styled.select<SelectProps>`
    ${setTruncate()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    appearance: none;
    display: block;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    width: 100%;
    color: ${({ theme }): string => theme.colorTextBody.primary};

    ${({ theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.COMPACT &&
        css`
            border: 0;
            border-bottom: 1px solid;
            border-radius: 0;
            padding: ${theme.spacing(0, 3, 0, 0)};
            height: ${theme.spacing(3.5)};
            line-height: ${theme.spacing(3.5)};
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.OUTLINE &&
        css`
            border: 1px solid;
            border-radius: ${theme.spacing(1)};
            padding: ${theme.spacing(0, 4.5, 0, 1.5)};
            height: ${theme.spacing(6)};
            line-height: ${theme.spacing(6)};
        `}

    ${({ isPlaceholderSelected, theme }): SimpleInterpolation =>
        isPlaceholderSelected &&
        css`
            color: ${theme.shades.four};
        `}

    ${({ isValid, theme }): SimpleInterpolation =>
        isValid &&
        css`
            color: ${theme.colorValid};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
            pointer-events: none;
        `}

    ${({ isEmpty }): SimpleInterpolation =>
        isEmpty &&
        css`
            pointer-events: none;
        `}

    ${({ hasError, isDisabled, isFocused, isHovered, isValid, theme }): SimpleInterpolation =>
        css`
            /* stylelint-disable indentation */
            border-color: ${getBorderColor({
                defaultColor: theme.colorText.primary,
                hasError,
                isDisabled,
                isFocused,
                isHovered,
                isValid,
                theme,
            })};
            /* stylelint-enable indentation */
        `}
`;

Select.defaultProps = {
    theme: themeBasic,
};

interface IconWrapperProps extends StyledDropdownProps {
    isHovered: boolean;
    variant: DropdownVariant;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    position: absolute;
    color: ${({ theme }): string => theme.colorText.primary};
    pointer-events: none;

    span {
        display: block;
    }

    ${({ theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.COMPACT &&
        css`
            top: ${theme.spacing(0.25)};
            right: 0;
        `}

    ${({ theme, variant }): SimpleInterpolation =>
        variant === DropdownVariant.OUTLINE &&
        css`
            top: ${theme.spacing(1.5)};
            right: ${theme.spacing(1.5)};
        `}

    ${({ isFocused, isHovered, theme }): SimpleInterpolation =>
        (isFocused || isHovered) &&
        css`
            color: ${theme.colorSecondary};
        `}

    ${({ isFocused }): SimpleInterpolation =>
        isFocused &&
        css`
            transform: rotate(180deg);
        `}

    ${({ isValid, theme }): SimpleInterpolation =>
        isValid &&
        css`
            color: ${theme.colorValid};
        `}

    ${({ hasError, theme }): SimpleInterpolation =>
        hasError &&
        css`
            color: ${theme.colorInvalid};
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};
