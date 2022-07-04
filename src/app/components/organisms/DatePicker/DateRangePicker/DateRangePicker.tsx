import {
    DateRangePicker as AirbnbDateRangePicker,
    AnchorDirectionShape,
    DateRangePickerShape,
    FocusedInputShape,
    OpenDirectionShape,
} from 'react-dates';
import { ButtonSize, ButtonVariant, IconType } from '../../../../types';
import DialogFooter, { DialogFooterProps } from '../../../molecules/DialogFooter/DialogFooter';
import React, { FunctionComponent, MouseEventHandler, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Shortcut, Shortcuts } from './Shortcuts/Shortcuts';
import { StyledDateRangePicker, StyledWrapper } from './DateRangePicker.sc';
import ButtonNavigation from '../ButtonNavigation/ButtonNavigation';
import FormElementLabel from '../../../molecules/FormElementLabel/FormElementLabel';
import InputIcon from '../InputIcon/InputIcon';
import { Moment } from 'moment';
import Navigation from '../Navigation/Navigation';
import { ThemeContext } from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';

export interface DateRangePickerProps {
    buttonCancelText?: ReactNode;
    buttonConfirmText?: ReactNode;
    children?: never;
    className?: string;
    daySize?: number;
    displayFormat?: string;
    endDate: Moment | null;
    endDateId: string;
    endDatePlaceholderText?: string;
    focusedInput: FocusedInputShape | null;
    footerText?: DialogFooterProps['text'];
    hasError?: boolean;
    hasYearSelector?: boolean;
    isDayBlocked?: (day: Moment) => boolean;
    isDayHighlighted?: (day: Moment) => boolean;
    isDisabled?: boolean;
    isOutsideRange?: (day: Moment) => boolean;
    isRequired?: boolean;
    keepOpenOnDateSelect?: boolean;
    label: ReactNode;
    labelMonth?: ReactNode;
    labelYear?: ReactNode;
    minimumNights?: number;
    numberOfMonths?: number;
    onCancel?: MouseEventHandler;
    onConfirm?: MouseEventHandler;
    onDatesChange: DateRangePickerShape['onDatesChange'];
    onFocusChange: DateRangePickerShape['onFocusChange'];
    parentContainer?: HTMLDivElement;
    shortcuts?: Shortcut[];
    shortcutsText?: ReactNode;
    startDate: Moment | null;
    startDateId: string;
    startDatePlaceholderText?: string;
    yearCount?: number;
    yearCountFuture?: number;
}

export const DateRangePicker: FunctionComponent<DateRangePickerProps> = ({
    buttonCancelText,
    buttonConfirmText,
    className,
    daySize = 40,
    displayFormat = 'ddd D MMM Y',
    endDate,
    endDateId,
    endDatePlaceholderText,
    focusedInput,
    footerText,
    hasError = false,
    hasYearSelector = false,
    isDayBlocked,
    isDayHighlighted,
    isDisabled = false,
    isOutsideRange,
    isRequired = false,
    keepOpenOnDateSelect,
    label,
    labelMonth,
    labelYear,
    minimumNights = 0,
    numberOfMonths = 2,
    onCancel,
    onConfirm,
    onDatesChange,
    onFocusChange,
    parentContainer,
    shortcuts = [],
    shortcutsText,
    startDate,
    startDateId,
    startDatePlaceholderText,
    yearCount = 100,
    yearCountFuture = 0,
}) => {
    const footerButtons: DialogFooterProps['buttons'] = [];
    const dateRangePickerRef = useRef<HTMLDivElement>(null);
    const [anchorDirection, setAnchorDirection] = useState<AnchorDirectionShape>('left');
    const [isRightDatepicker, setIsRightDatepicker] = useState(false);
    const [isTopDatepicker, setIsTopDatepicker] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const isFocused = Boolean(focusedInput);
    const { spacingValue } = useContext(ThemeContext);
    const [openDatePickerMinHeight, setOpenDatePickerMinHeight] = useState(400);
    const [openDatePickerMinWidth, setOpenDatePickerMinWidth] = useState(350);
    const [openDirection, setOpenDirection] = useState<OpenDirectionShape>('down');

    if (onCancel) {
        footerButtons.push({
            children: buttonCancelText,
            iconType: IconType.CROSS,
            onClick: onCancel,
            size: ButtonSize.SMALL,
            variant: ButtonVariant.TEXT_ONLY,
        });
    }

    if (onConfirm) {
        footerButtons.push({
            children: buttonConfirmText,
            iconType: IconType.CHECK,
            onClick: isDisabled ? undefined : onConfirm,
            size: ButtonSize.SMALL,
        });
    }

    useEffect(() => {
        // On Mount: get the measures of de DOM element of the calendar part of a SingleDatePicker_picker
        const datePickerContainer = document.querySelectorAll('div.DayPicker__horizontal');

        if (datePickerContainer && datePickerContainer.length !== 0) {
            if (datePickerContainer[0].clientHeight !== openDatePickerMinHeight) {
                setOpenDatePickerMinHeight(datePickerContainer[0].clientHeight);
            }

            if (datePickerContainer[0].clientWidth !== openDatePickerMinWidth) {
                setOpenDatePickerMinWidth(datePickerContainer[0].clientWidth);
            }
        }
    }, []);

    useEffect(() => {
        if (dateRangePickerRef.current) {
            // position of datePicker in the window
            let { top, left } = dateRangePickerRef.current.getBoundingClientRect();

            // position of the datePicker relative to the parentContainer.
            if (parentContainer) {
                const parentContainerRect = parentContainer.getBoundingClientRect();
                top -= parentContainerRect.top;
                left -= parentContainerRect.left;
            }

            const containerHeight = parentContainer ? parentContainer.offsetHeight : window.innerHeight;
            const containerWidth = parentContainer ? parentContainer.offsetWidth : window.innerWidth;

            // calculate available space under and to the right of the dropdown
            const availableSpaceUnder = Math.round(containerHeight - top);
            const availableSpaceRight = Math.round(containerWidth - left);

            // open date picker above only if there is enough space above and not enough space under
            setIsTopDatepicker(openDatePickerMinHeight > availableSpaceUnder && openDatePickerMinHeight < top);

            // align date picker to the right otherwise it exceeds parent container's width
            setIsRightDatepicker(openDatePickerMinWidth > availableSpaceRight);
        }
    }, [parentContainer, dateRangePickerRef.current]);

    useEffect(() => {
        setOpenDirection(isTopDatepicker ? 'up' : 'down');
    }, [isTopDatepicker]);

    useEffect(() => {
        setAnchorDirection(isRightDatepicker ? 'right' : 'left');
    }, [isRightDatepicker]);

    return (
        <StyledWrapper ref={dateRangePickerRef}>
            <Wrapper
                className={className}
                hasError={hasError}
                hasYearSelector={hasYearSelector}
                isFocused={isFocused}
                onMouseEnter={(): void => {
                    setIsHovered(true);
                }}
                onMouseLeave={(): void => {
                    setIsHovered(false);
                }}
            >
                <StyledDateRangePicker isTopDatepicker={isTopDatepicker}>
                    <FormElementLabel
                        isActive
                        isDisabled={isDisabled}
                        isFocused={isFocused}
                        isHovered={isHovered}
                        isRequired={isRequired}
                    >
                        {label}
                    </FormElementLabel>
                    <AirbnbDateRangePicker
                        anchorDirection={anchorDirection}
                        customInputIcon={<InputIcon isDisabled={isDisabled} isFocused={isFocused} />}
                        daySize={daySize}
                        disabled={isDisabled}
                        displayFormat={displayFormat}
                        endDate={endDate}
                        endDateId={endDateId}
                        endDatePlaceholderText={endDatePlaceholderText}
                        focusedInput={focusedInput}
                        hideKeyboardShortcutsPanel
                        isDayBlocked={isDayBlocked}
                        isDayHighlighted={isDayHighlighted}
                        isOutsideRange={isOutsideRange}
                        keepOpenOnDateSelect={keepOpenOnDateSelect}
                        minimumNights={minimumNights}
                        navNext={<ButtonNavigation isNext />}
                        navPrev={<ButtonNavigation isPrev />}
                        numberOfMonths={numberOfMonths}
                        onDatesChange={onDatesChange}
                        onFocusChange={onFocusChange}
                        openDirection={openDirection}
                        renderCalendarInfo={(): JSX.Element => (
                            <>
                                {shortcuts.length > 0 && <Shortcuts shortcuts={shortcuts} text={shortcutsText} />}
                                {footerButtons.length > 0 && <DialogFooter buttons={footerButtons} text={footerText} />}
                            </>
                        )}
                        renderMonthElement={(props): JSX.Element => (
                            <Navigation
                                {...props}
                                hasYearSelector={hasYearSelector}
                                labelMonth={labelMonth}
                                labelYear={labelYear}
                                yearCount={yearCount}
                                yearCountFuture={yearCountFuture}
                            />
                        )}
                        startDate={startDate}
                        startDateId={startDateId}
                        startDatePlaceholderText={startDatePlaceholderText}
                        verticalSpacing={spacingValue * 6 - 40}
                    />
                </StyledDateRangePicker>
            </Wrapper>
        </StyledWrapper>
    );
};

export default DateRangePicker;
