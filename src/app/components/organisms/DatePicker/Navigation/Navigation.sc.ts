import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const StyledNavigation = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const DropdownWrapper = styled.div`
    flex: 0 1 auto;
    width: 50%;

    &:first-of-type {
        margin: ${({ theme }): string => theme.spacing(0, 0.75, 0, 0)};
    }

    &:last-of-type {
        margin: ${({ theme }): string => theme.spacing(0, 0, 0, 0.75)};
    }
`;

DropdownWrapper.defaultProps = {
    theme: themeBasic,
};

export const CurrentDate = styled.p`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h2)}
    margin: 0;
    text-transform: capitalize;
    color: ${({ theme }): string => theme.colorText.primary};
`;

CurrentDate.defaultProps = {
    theme: themeBasic,
};
