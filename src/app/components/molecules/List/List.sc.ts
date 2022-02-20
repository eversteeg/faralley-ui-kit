import styled, { css, SimpleInterpolation } from 'styled-components';

interface StyledListProps {
    maxHeight?: number;
    minHeight?: number;
}

export const StyledList = styled.ul<StyledListProps>`
    margin: ${({ theme }): string => theme.spacing(0)};
    background-color: ${({ theme }): string => theme.card.backgroundColor};
    padding: ${({ theme }): string => theme.spacing(0)};
    overflow: auto;
    list-style-type: none;

    ${({ maxHeight }): SimpleInterpolation =>
        maxHeight &&
        css`
            max-height: ${maxHeight}px;
        `}

    ${({ minHeight }): SimpleInterpolation =>
        minHeight &&
        css`
            min-height: ${minHeight}px;
        `}
`;
