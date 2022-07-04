import styled, { css, SimpleInterpolation } from 'styled-components';
import { setCentered } from '../../../../styles/mixins/setCentered';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const StyledWrapper = styled.div``;
interface StyledDateRangePickerProps {
    isTopDatepicker: boolean;
}
export const StyledDateRangePicker = styled.div<StyledDateRangePickerProps>`
    .DateRangePickerInput {
        display: flex;
        flex-wrap: nowrap;
    }

    .DateInput {
        flex: 1 1 auto;
    }

    .DateRangePickerInput_arrow {
        position: relative;
        flex: 0 0 auto;
        width: 20px;
        text-align: center;
        color: ${({ theme }): string => theme.colorText.primary};

        &::after {
            ${setCentered()}
            display: block;
            position: absolute;
            content: '-';
        }

        svg {
            display: none;
        }
    }

    .DateRangePickerInput__disabled {
        .DateRangePickerInput_arrow {
            color: ${({ theme }): string => theme.colorDisabled};
        }
    }

    .CalendarDay__default.CalendarDay__selected_span {
        background-color: ${({ theme }): string => theme.colorTertiary};
        color: ${({ theme }): string => theme.colorTextContrast.primary};
    }

    .DateRangePicker_picker {
        ${({ isTopDatepicker }): SimpleInterpolation =>
            isTopDatepicker &&
            css`
                margin-bottom: 8px;
            `}
    }
`;

StyledDateRangePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledDateRangePicker;
