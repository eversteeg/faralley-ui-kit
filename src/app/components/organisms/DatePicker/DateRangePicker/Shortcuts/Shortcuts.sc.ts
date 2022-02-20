import styled from 'styled-components';
import { themeBasic } from '../../../../../styles/theming/themes/basic';

export const StyledShortcuts = styled.div`
    display: flex;
    align-items: center;
    padding: ${({ theme }): string => theme.spacing(0, 2.75, 1.5)};
`;

StyledShortcuts.defaultProps = {
    theme: themeBasic,
};

export const Text = styled.p`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    flex: 0 0 auto;
    margin: ${({ theme }): string => theme.spacing(0, 2, 1, 0)};
    color: ${({ theme }): string => theme.colorText.primary};
    font-weight: 600;
`;

Text.defaultProps = {
    theme: themeBasic,
};

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

Wrapper.defaultProps = {
    theme: themeBasic,
};

export const ButtonWrapper = styled.div`
    flex: 0 0 auto;
    margin: ${({ theme }): string => theme.spacing(0, 2, 1, 0)};
`;

ButtonWrapper.defaultProps = {
    theme: themeBasic,
};
