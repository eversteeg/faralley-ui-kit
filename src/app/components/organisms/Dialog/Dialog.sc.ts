import { DialogButtonClosePosition, IconPlacement } from './types';
import { DialogSize, Easing, Elevation, Status, zIndex } from '../../../types';
import { fadeInEffect, transitionEffect } from '../../../styles/mixins/transitionEffects';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { getElevation } from '../../../styles/mixins/getElevation';
import { getStatusColor } from '../../../styles/mixins/getStatusColor';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { setCentered } from '../../../styles/mixins/setCentered';
import { TextWithOptionalIcon } from '../../molecules/TextWithOptionalIcon/TextWithOptionalIcon';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { Text as TText } from '../../molecules/TextWithOptionalIcon/TextWithOptionalIcon.sc';

const widthScrollable = 40;

const dialogwidth = (size: DialogSize, isScrollable: boolean): number => {
    let width = 544;

    switch (size) {
        case DialogSize.MEDIUM:
            width = 650;
            break;

        case DialogSize.LARGE:
            width = 750;
            break;

        default:
            width = 544;
            break;
    }

    return isScrollable ? width - widthScrollable : width;
};

interface OverlayWrapperProps {
    isVisible: boolean;
}

export const OverlayWrapper = styled.div<OverlayWrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${zIndex.DIALOG - 2};
    width: 100%;
    height: 100%;
    pointer-events: ${({ isVisible }): string => (isVisible ? 'auto' : 'none')};
`;

interface WrapperProps {
    height: number;
    isResizable: boolean;
    isScrollable: boolean;
    isVisible: boolean;
    size: DialogSize;
    transitionDuration: number;
    transitionEasing: Easing;
}

export const Wrapper = styled.div<WrapperProps>`
    ${setBoxSizing()}
    ${setCentered()}
    ${({ transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
        transitionEffect({
            duration: transitionDuration,
            easing: transitionEasing,
            property: 'all',
        })}
    ${({ isVisible, transitionDuration, transitionEasing }): FlattenSimpleInterpolation =>
        fadeInEffect({
            duration: transitionDuration,
            easing: transitionEasing,
            isVisible,
        })}
    position: fixed;
    opacity: ${({ isVisible }): number => (isVisible ? 1 : 0)};
    z-index: ${zIndex.DIALOG - 1};
    padding: ${({ isScrollable }): string => (isScrollable ? '0px' : `${widthScrollable}px`)};
    width: 100%;
    max-width: ${({ isScrollable, size }): string => `${dialogwidth(size, isScrollable)}px`};
    height: ${({ height }): string => `${height}px`};
    max-height: 100%;
    overflow: 'visible';

    ${({ isResizable }): SimpleInterpolation =>
        isResizable &&
        css`
            overflow: 'hidden';
        `}

    ${({ isScrollable }): SimpleInterpolation =>
        isScrollable &&
        css`
            overflow: 'auto';
        `}
    pointer-events: ${({ isVisible }): string => (isVisible ? 'auto' : 'none')};
`;

interface StyledDialogProps {
    elevation: Elevation;
    isScrollable: boolean;
}

export const StyledDialog = styled.div<StyledDialogProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    border-radius: ${({ theme }): string => theme.spacing(1)};
    overflow: ${({ isScrollable }): string => (isScrollable ? 'hidden' : 'inherit')};
`;

StyledDialog.defaultProps = {
    theme: themeBasic,
};

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

interface ButtonCloseProps {
    position: DialogButtonClosePosition;
}

export const ButtonClose = styled.button<ButtonCloseProps>`
    position: fixed;
    top: 2px;
    z-index: ${zIndex.DIALOG};
    outline: none;
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: ${({ theme }): string => theme.spacing(1)};
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ position }): SimpleInterpolation =>
        position === DialogButtonClosePosition.LEFT &&
        css`
            left: 2px;
        `}

    ${({ position }): SimpleInterpolation =>
        position === DialogButtonClosePosition.RIGHT &&
        css`
            right: 2px;
        `}

    &:active,
    &:hover {
        background-color: transparent;
        color: ${({ theme }): string => theme.colorTextContrast.primary};
    }

    span {
        display: block;
    }
`;

ButtonClose.defaultProps = {
    theme: themeBasic,
};

interface HeaderProps {
    hasHeaderPadding: boolean;
}

export const Header = styled.header<HeaderProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h1)}
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    background-color: ${({ theme }): string => theme.colorPrimary};
    min-height: ${({ theme }): string => theme.spacing(7)};
    color: ${({ theme }): string => theme.colorTextContrast.primary};

    ${({ hasHeaderPadding, theme }): SimpleInterpolation =>
        hasHeaderPadding &&
        css`
            padding: ${theme.spacing(2, 3)};
        `}
`;

Header.defaultProps = {
    theme: themeBasic,
};

interface BodyProps {
    hasBodyPadding: boolean;
    hasBorderRadius: boolean;
}

export const Body = styled.div<BodyProps>`
    ${({ hasBorderRadius }): SimpleInterpolation =>
        hasBorderRadius &&
        css`
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
        `}

    background-color: ${({ theme }): string => theme.card.backgroundColor};

    ${({ hasBodyPadding, theme }): SimpleInterpolation =>
        hasBodyPadding &&
        css`
            padding: ${theme.spacing(2, 3)};
        `}
`;

Body.defaultProps = {
    theme: themeBasic,
};

export const StyledTextWithOptionalIcon = styled(TextWithOptionalIcon)`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().buttonLarge)}
    justify-content: flex-start;
    margin: ${({ theme }): string => theme.spacing(1, 0, 2, 0)};
    color: ${({ theme }): string => theme.colorPrimary};

    ${TText} {
        margin: ${({ theme }): string => theme.spacing(0, 0, 0, 0.5)};
    }
`;

interface ContentProps {
    iconPlacement: IconPlacement;
}

export const Content = styled.div<ContentProps>`
    display: flex;
    flex-wrap: nowrap;

    ${({ iconPlacement }): SimpleInterpolation =>
        iconPlacement === IconPlacement.BOTTOM &&
        css`
            align-items: flex-end;
        `}

    ${({ iconPlacement }): SimpleInterpolation =>
        iconPlacement === IconPlacement.CENTER &&
        css`
            align-items: center;
        `}

    ${({ iconPlacement }): SimpleInterpolation =>
        iconPlacement === IconPlacement.TOP &&
        css`
            align-items: flex-start;
        `}
`;

interface IconWrapperProps {
    status: Status;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    flex: 0 0 auto;
    margin: ${({ theme }): string => theme.spacing(0.75, 2, 0, 0)};
    color: ${({ status, theme }): string => getStatusColor(status, theme)};

    span {
        display: block;
    }
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const Text = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    color: ${({ theme }): string => theme.colorTextBody.primary};
`;

Text.defaultProps = {
    theme: themeBasic,
};

interface ChildrenWrapperProps {
    hasPaddingLeft: boolean;
    hasPaddingTop: boolean;
}

export const ChildrenWrapper = styled.div<ChildrenWrapperProps>`
    ${({ hasPaddingLeft, theme }): SimpleInterpolation =>
        hasPaddingLeft &&
        css`
            padding-left: ${theme.spacing(6)};
        `}

    ${({ hasPaddingTop, theme }): SimpleInterpolation =>
        hasPaddingTop &&
        css`
            padding-top: ${theme.spacing(2)};
        `}
`;

ChildrenWrapper.defaultProps = {
    theme: themeBasic,
};
