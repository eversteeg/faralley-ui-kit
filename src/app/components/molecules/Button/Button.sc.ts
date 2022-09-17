import { ButtonSize, ButtonVariant, Easing } from '../../../types';
import { rippleEffect, rippleEffectInit, rippleEffectReset } from '../../../styles/mixins/rippleEffect';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

interface StyledButtonProps {
    hasNoPadding: boolean;
    isDisabled: boolean;
    isFullWidth: boolean;
    isInverted: boolean;
    isLoading: boolean;
    isTruncatable: boolean;
    size: ButtonSize;
    transitionDuration: number;
    transitionEasing: Easing;
    variant: ButtonVariant;
}

export const StyledButton = styled.button<StyledButtonProps>`
    ${({ transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
        transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
        })}
    ${rippleEffectInit()}
    appearance: none;
    outline: none;
    border: 2px solid;
    cursor: pointer;

    ${({ isTruncatable }): SimpleInterpolation =>
        !isTruncatable &&
        css`
            white-space: nowrap;
        `}

    ${({ isFullWidth }): SimpleInterpolation =>
        isFullWidth &&
        css`
            justify-content: center;
            width: 100%;
        `}

    ${({ isDisabled, isInverted, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            border-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
            background-color: ${isInverted ? theme.shades.seven : theme.colorDisabled};
            pointer-events: none;
        `}

    ${({ size, theme }): SimpleInterpolation =>
        size === ButtonSize.SMALL &&
        css`
            ${theme.textStyling(theme.availableTextStyles().buttonSmall)}
            border-radius: ${theme.spacing(2)};
            padding: ${theme.spacing(0.25, 2)};
            min-width: ${theme.spacing(10)};
            min-height: ${theme.spacing(4)};
        `}

    ${({ size, theme }): SimpleInterpolation =>
        size === ButtonSize.MEDIUM &&
        css`
            ${theme.textStyling(theme.availableTextStyles().buttonMedium)}
            border-radius: ${theme.spacing(2.5)};
            padding: ${theme.spacing(1, 2)};
            min-width: ${theme.spacing(12)};
            min-height: ${theme.spacing(5)};
        `}

    ${({ size, theme }): SimpleInterpolation =>
        size === ButtonSize.LARGE &&
        css`
            ${theme.textStyling(theme.availableTextStyles().buttonLarge)}
            border-radius: ${theme.spacing(3)};
            padding: ${theme.spacing(1, 2)};
            min-width: ${theme.spacing(14)};
            min-height: ${theme.spacing(6)};
        `}

    ${({ isDisabled, isInverted, theme: { button }, variant }): SimpleInterpolation =>
        variant === ButtonVariant.DANGER &&
        css`
            border-color: ${isInverted ? button.danger.border.inverted : button.danger.border.primary};
            background-color: ${isInverted
                ? button.danger.backgroundColor.inverted
                : button.danger.backgroundColor.primary};
            color: ${isInverted ? button.danger.color.inverted : button.danger.color.primary};

            ${!isDisabled &&
            css`
                &:hover {
                    border-color: ${isInverted ? button.danger.border.hoverInverted : button.danger.border.hover};
                    background-color: ${isInverted
                        ? button.danger.backgroundColor.hoverInverted
                        : button.danger.backgroundColor.hover};
                    color: ${isInverted ? button.danger.color.hoverInverted : button.danger.color.hover};
                }
            `}

            ${!isDisabled &&
            css`
                &:focus {
                    border-color: ${isInverted ? button.danger.border.focusInverted : button.danger.border.focus};
                    background-color: ${isInverted
                        ? button.danger.backgroundColor.focusInverted
                        : button.danger.backgroundColor.focus};
                }
            `}

            ${isDisabled &&
            css`
                border-color: ${isInverted ? button.danger.color.disabled : button.danger.backgroundColor.disabled};
                background-color: ${isInverted ? button.danger.color.disabled : button.danger.backgroundColor.disabled};
                color: ${isInverted ? button.danger.backgroundColor.disabled : button.danger.color.disabled};
            `}
        `}

    ${({ isDisabled, isInverted, theme: { button }, variant }): SimpleInterpolation =>
        variant === ButtonVariant.PRIMARY &&
        css`
            border-color: ${isInverted ? button.primary.border.inverted : button.primary.border.primary};
            background-color: ${isInverted
                ? button.primary.backgroundColor.inverted
                : button.primary.backgroundColor.primary};
            color: ${isInverted ? button.primary.color.inverted : button.primary.color.primary};

            ${!isDisabled &&
            css`
                &:hover {
                    border-color: ${isInverted ? button.primary.border.hoverInverted : button.primary.border.hover};
                    background-color: ${isInverted
                        ? button.primary.backgroundColor.hoverInverted
                        : button.primary.backgroundColor.hover};
                    color: ${isInverted ? button.primary.color.hoverInverted : button.primary.color.hover};
                }
            `}

            ${!isDisabled &&
            css`
                &:focus {
                    border-color: ${isInverted ? button.primary.border.focusInverted : button.primary.border.focus};
                    background-color: ${isInverted
                        ? button.primary.backgroundColor.focusInverted
                        : button.primary.backgroundColor.focus};
                }
            `}

            ${isDisabled &&
            css`
                border-color: ${isInverted ? button.primary.color.disabled : button.primary.backgroundColor.disabled};
                background-color: ${isInverted
                    ? button.primary.color.disabled
                    : button.primary.backgroundColor.disabled};
                color: ${isInverted ? button.primary.backgroundColor.disabled : button.primary.color.disabled};
            `}
        `}

    ${({ isDisabled, isInverted, theme: { button }, variant }): SimpleInterpolation =>
        variant === ButtonVariant.SECONDARY &&
        css`
            border-color: ${isInverted ? button.secondary.border.inverted : button.secondary.border.primary};
            background-color: ${isInverted
                ? button.secondary.backgroundColor.inverted
                : button.secondary.backgroundColor.primary};
            color: ${isInverted ? button.secondary.color.inverted : button.secondary.color.primary};

            ${!isDisabled &&
            css`
                &:hover {
                    border-color: ${isInverted ? button.secondary.border.hoverInverted : button.secondary.border.hover};
                    background-color: ${isInverted
                        ? button.secondary.backgroundColor.hoverInverted
                        : button.secondary.backgroundColor.hover};
                    color: ${isInverted ? button.secondary.color.hoverInverted : button.secondary.color.hover};
                }
            `}

            ${!isDisabled &&
            css`
                &:focus {
                    border-color: ${isInverted ? button.secondary.border.focusInverted : button.secondary.border.focus};
                    background-color: ${isInverted
                        ? button.secondary.backgroundColor.focusInverted
                        : button.secondary.backgroundColor.focus};
                }
            `}

            ${isDisabled &&
            css`
                border-color: ${isInverted
                    ? button.secondary.color.disabled
                    : button.secondary.backgroundColor.disabled};
                background-color: ${isInverted
                    ? button.secondary.color.disabled
                    : button.secondary.backgroundColor.disabled};
                color: ${isInverted ? button.secondary.backgroundColor.disabled : button.secondary.color.disabled};
            `}
        `}

    ${({ isDisabled, isInverted, theme: { button }, variant }): SimpleInterpolation =>
        variant === ButtonVariant.SECONDARYLIGHT &&
        css`
            border-color: ${isInverted ? button.secondaryLight.border.inverted : button.secondaryLight.border.primary};
            background-color: ${isInverted
                ? button.secondaryLight.backgroundColor.inverted
                : button.secondaryLight.backgroundColor.primary};
            color: ${isInverted ? button.secondaryLight.color.inverted : button.secondaryLight.color.primary};

            ${!isDisabled &&
            css`
                &:hover {
                    border-color: ${isInverted
                        ? button.secondaryLight.border.hoverInverted
                        : button.secondaryLight.border.hover};
                    background-color: ${isInverted
                        ? button.secondaryLight.backgroundColor.hoverInverted
                        : button.secondaryLight.backgroundColor.hover};
                    color: ${isInverted
                        ? button.secondaryLight.color.hoverInverted
                        : button.secondaryLight.color.hover};
                }
            `}

            ${!isDisabled &&
            css`
                &:focus {
                    border-color: ${isInverted
                        ? button.secondaryLight.border.focusInverted
                        : button.secondaryLight.border.focus};
                    background-color: ${isInverted
                        ? button.secondaryLight.backgroundColor.focusInverted
                        : button.secondaryLight.backgroundColor.focus};
                }
            `}

            ${isDisabled &&
            css`
                border-color: ${isInverted
                    ? button.secondaryLight.color.disabled
                    : button.secondaryLight.color.disabled};
                background-color: ${isInverted
                    ? button.secondaryLight.color.disabled
                    : button.secondaryLight.backgroundColor.disabled};
                color: ${isInverted
                    ? button.secondaryLight.backgroundColor.disabled
                    : button.secondaryLight.color.disabled};
            `}
        `}

    ${({ hasNoPadding, isDisabled, isInverted, theme: { button }, variant }): SimpleInterpolation =>
        variant === ButtonVariant.TEXT_ONLY &&
        css`
            border: 0;
            border-radius: 0;
            background-color: transparent !important;
            padding: ${hasNoPadding ? 0 : '4px'};
            min-width: 0;
            min-height: 0;
            color: ${isInverted ? button.textOnly.inverted : button.textOnly.primary};

            ${!isDisabled &&
            css`
                &:focus,
                &:hover {
                    color: ${isInverted ? button.textOnly.hoverInverted : button.textOnly.hover};
                }
            `}

            ${isDisabled &&
            css`
                color: ${isInverted ? button.textOnly.disabledInverted : button.textOnly.disabled};
            `}
        `}

    ${({ isLoading }): SimpleInterpolation =>
        isLoading &&
        css`
            pointer-events: none;
        `}

    &::after {
        ${({ variant, theme: { button } }): SimpleInterpolation =>
            variant !== ButtonVariant.TEXT_ONLY &&
            rippleEffect(
                variant === ButtonVariant.PRIMARY
                    ? button.primary.color.primary
                    : button.secondary.backgroundColor.primary
            )}
    }

    &:active::after {
        ${rippleEffectReset()}
    }
`;

StyledButton.defaultProps = {
    theme: themeBasic,
};

export const LoaderWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
`;

interface TextWrapperProps {
    isLoading: boolean;
}

export const TextWrapper = styled.div<TextWrapperProps>`
    ${({ isLoading }): SimpleInterpolation =>
        isLoading &&
        css`
            visibility: hidden;
        `}
`;
