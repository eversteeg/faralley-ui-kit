import { Direction, IconSize } from '../../../types';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { setTruncate } from '../../../styles/mixins/setTruncate';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface TextProps {
    isCapitalized: boolean;
    isDisabled: boolean;
    isSelectable: boolean;
    isTruncatable: boolean;
}

export const Text = styled.p<TextProps>`
    ${setBoxSizing()}
    ${({ isTruncatable }): SimpleInterpolation => isTruncatable && setTruncate()}
    flex: 0 1 auto;
    order: 2;
    margin: 0;
    word-break: break-word;
    user-select: ${({ isSelectable }): string => (isSelectable ? 'auto' : 'none')};

    ${({ isCapitalized }): SimpleInterpolation =>
        isCapitalized &&
        css`
            &::first-letter,
            span::first-letter {
                text-transform: uppercase;
            }
        `}

    ${({ isDisabled, theme }): SimpleInterpolation =>
        isDisabled &&
        css`
            color: ${theme.colorDisabled};
        `}
`;

interface IconWrapperProps {
    size: IconSize;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    order: 1;
    margin: ${({ theme }): string => theme.spacing(0, 0.75, 0, 0)};

    span {
        display: block;
    }

    ${({ size, theme }): FlattenSimpleInterpolation => css`
        ${size === IconSize.XSMALL &&
        css`
            margin: ${theme.spacing(0, 0.25, 0, 0)};
        `}
    `}
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

interface StyledTextWithOptionalIconProps {
    direction: Direction;
}

export const StyledTextWithOptionalIcon = styled.div<StyledTextWithOptionalIconProps>`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    ${({ direction, theme }): SimpleInterpolation =>
        direction === Direction.RTL &&
        css`
            ${Text} {
                order: 1;
            }

            ${IconWrapper} {
                order: 2;
                margin: ${theme.spacing(0, 0, 0, 0.75)};
            }
        `}
`;

StyledTextWithOptionalIcon.defaultProps = {
    theme: themeBasic,
};
