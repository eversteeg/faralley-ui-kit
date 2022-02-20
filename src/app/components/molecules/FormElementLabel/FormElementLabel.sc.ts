import { AdornmentPosition, InputVariant } from '../../../types';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledFormElementLabelProps {
    adornmentPosition: AdornmentPosition;
    backgroundColor?: string;
    hasAdornment: boolean;
    isActive: boolean;
    variant: InputVariant;
}

export const StyledFormElementLabel = styled.div<StyledFormElementLabelProps>`
    position: absolute;
    transition: top 300ms ease, left 300ms ease;
    z-index: 1;
    max-width: 70%;
    text-align: left;
    pointer-events: none;

    ${({ adornmentPosition, hasAdornment, isActive, theme, variant }): SimpleInterpolation =>
        variant === InputVariant.COMPACT &&
        css`
            top: ${isActive ? '-16px' : '4px'};
            left: 0;
            ${!isActive &&
            hasAdornment &&
            adornmentPosition === AdornmentPosition.LEFT &&
            css`
                left: ${theme.spacing(2.5)};
            `}
        `}

    ${({ adornmentPosition, backgroundColor, hasAdornment, isActive, theme, variant }): SimpleInterpolation =>
        variant === InputVariant.OUTLINE &&
        css`
            top: ${isActive ? '-8px' : '50%'};
            left: ${theme.spacing(1.5)};

            ${!isActive &&
            hasAdornment &&
            adornmentPosition === AdornmentPosition.LEFT &&
            css`
                left: ${theme.spacing(3.5)};
            `}

            transform: ${isActive ? 'none' : 'translate3d(0, -50%, 0)'};

            ${isActive &&
            css`
                padding: ${theme.spacing(0, 0.5)};

                &::after {
                    display: block;
                    position: absolute;
                    top: 8px;
                    left: 0;
                    z-index: -1;
                    background-color: ${backgroundColor || theme.shades.nine};
                    width: 100%;
                    height: 1px;
                    content: '';
                }
            `}
        `}
`;

StyledFormElementLabel.defaultProps = {
    theme: themeBasic,
};

export default StyledFormElementLabel;
