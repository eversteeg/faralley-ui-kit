import styled, { css, SimpleInterpolation } from 'styled-components';
import { Alignment } from '../../../types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledDialogFooter = styled.footer`
    ${setBoxSizing()}
    display: flex;
    align-items: center;
    justify-content: flex-end;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background-color: ${({ theme }): string => theme.shades.seven};
    padding: ${({ theme }): string => theme.spacing(2)};
`;

StyledDialogFooter.defaultProps = {
    theme: themeBasic,
};

export const Text = styled.p`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    margin: 0;
    padding: ${({ theme }): string => theme.spacing(0, 2, 0, 0)};
    width: 100%;
    word-break: break-word;
    color: ${({ theme }): string => theme.colorText.primary};
`;

Text.defaultProps = {
    theme: themeBasic,
};

interface ButtonBarWrapperProps {
    alignment: Alignment;
}

export const ButtonBarWrapper = styled.div<ButtonBarWrapperProps>`
    display: flex;
    justify-content: ${({ alignment }): string => (alignment === Alignment.LEFT ? 'left' : 'right')};

    ${({ alignment }): SimpleInterpolation =>
        alignment === Alignment.LEFT &&
        css`
            flex-grow: 1;
        `}

    text-align: right;
`;

interface ButtonWrapperProps {
    alignment?: Alignment;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    display: inline-flex;
    align-items: center;
    margin: ${({ alignment, theme }): string =>
        theme.spacing(0, alignment === Alignment.LEFT ? 0.5 : 1, 0, alignment === Alignment.LEFT ? 0 : 1)};
    min-height: ${({ theme }): string => theme.spacing(4)};
    vertical-align: middle;

    &:last-of-type {
        margin-right: 0;
    }
`;

ButtonWrapper.defaultProps = {
    theme: themeBasic,
};
