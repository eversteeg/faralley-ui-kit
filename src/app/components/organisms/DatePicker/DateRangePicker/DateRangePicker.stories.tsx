import { boolean, number, text } from '@storybook/addon-knobs';
import moment, { Moment } from 'moment';
import React, { FunctionComponent, useState } from 'react';
import DateRangePicker from './DateRangePicker';
import { FocusedInputShape } from 'react-dates';
import styled from 'styled-components';

const defaultEndDate = moment().add(1, 'w');
const defaultStartDate = moment();

export default { title: 'organisms/DateRangePicker' };

export const Default: FunctionComponent = () => {
    const [endDate, setEndDate] = useState<Moment | null>(defaultEndDate);
    const [startDate, setStartDate] = useState<Moment | null>(defaultStartDate);
    const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);

    return (
        <DateRangePicker
            buttonCancelText={text('Button cancel text', 'reset')}
            buttonConfirmText={text('Button confirm text', 'toepassen')}
            displayFormat={text('Display format', 'ddd D MMM Y')}
            endDate={endDate}
            endDateId="daterangepicker_end"
            endDatePlaceholderText={text('End date placeholder text', 'Eind datum')}
            focusedInput={focusedInput}
            footerText="Selecteer minimaal twee dagen"
            hasError={boolean('Has error', false)}
            isDayBlocked={(day): boolean => day.day() === 3}
            isDisabled={boolean('Is disabled', false)}
            isOutsideRange={(): false => false}
            isRequired={boolean('Is required', false)}
            keepOpenOnDateSelect
            label={text('Label', 'Je favoriete periode')}
            minimumNights={number('Minimum nights', 1)}
            numberOfMonths={number('Number of months', 2)}
            onCancel={(): void => {
                setStartDate(defaultStartDate);
                setEndDate(defaultEndDate);
            }}
            onConfirm={(): void => {
                setFocusedInput(null);
            }}
            onDatesChange={(event): void => {
                setStartDate(event.startDate);
                setEndDate(event.endDate);
            }}
            onFocusChange={(input): void => {
                setFocusedInput(input);
            }}
            shortcuts={[
                {
                    key: 1,
                    onClick: (): void => {
                        setStartDate(moment());
                        setEndDate(moment().add(1, 'd'));
                    },
                    text: 'vandaag en morgen',
                },
                {
                    key: 2,
                    onClick: (): void => {
                        setStartDate(moment().day(6));
                        setEndDate(moment().day(6).add(1, 'd'));
                    },
                    text: 'aankomend weekend',
                },
                {
                    key: 3,
                    onClick: (): void => {
                        setStartDate(moment());
                        setEndDate(moment().add(13, 'd'));
                    },
                    text: 'de komende twee weken',
                },
                {
                    key: 4,
                    onClick: (): void => {
                        setStartDate(moment().add(1, 'M').startOf('month'));
                        setEndDate(moment().add(1, 'M').endOf('month'));
                    },
                    text: 'de volgende maand',
                },
            ]}
            shortcutsText={text('Shortcuts text', 'Snelkeuzes')}
            startDate={startDate}
            startDateId="daterangepicker_start"
            startDatePlaceholderText={text('Start date placeholder text', 'Start datum')}
        />
    );
};

export const DefaultWithoutShortcuts: FunctionComponent = () => {
    const [endDate, setEndDate] = useState<Moment | null>(defaultEndDate);
    const [startDate, setStartDate] = useState<Moment | null>(defaultStartDate);
    const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);

    return (
        <DateRangePicker
            buttonCancelText={text('Button cancel text', 'reset')}
            buttonConfirmText={text('Button confirm text', 'toepassen')}
            displayFormat={text('Display format', 'ddd D MMM Y')}
            endDate={endDate}
            endDateId="daterangepicker_end"
            endDatePlaceholderText={text('End date placeholder text', 'Eind datum')}
            focusedInput={focusedInput}
            isDayBlocked={(day): boolean => day.day() === 3}
            isDisabled={boolean('Is disabled', false)}
            isOutsideRange={(): false => false}
            isRequired={boolean('Is required', false)}
            keepOpenOnDateSelect
            label={text('Label', 'Je favoriete periode')}
            minimumNights={number('Minimum nights', 1)}
            numberOfMonths={number('Number of months', 2)}
            onCancel={(): void => {
                setStartDate(defaultStartDate);
                setEndDate(defaultEndDate);
            }}
            onConfirm={(): void => {
                setFocusedInput(null);
            }}
            onDatesChange={(event): void => {
                setStartDate(event.startDate);
                setEndDate(event.endDate);
            }}
            onFocusChange={(input): void => {
                setFocusedInput(input);
            }}
            startDate={startDate}
            startDateId="daterangepicker_start"
            startDatePlaceholderText={text('Start date placeholder text', 'Start datum')}
        />
    );
};

export const DefaultWithoutFooter: FunctionComponent = () => {
    const [endDate, setEndDate] = useState<Moment | null>(defaultEndDate);
    const [startDate, setStartDate] = useState<Moment | null>(defaultStartDate);
    const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);

    return (
        <DateRangePicker
            buttonCancelText={text('Button cancel text', 'reset')}
            buttonConfirmText={text('Button confirm text', 'toepassen')}
            displayFormat={text('Display format', 'ddd D MMM Y')}
            endDate={endDate}
            endDateId="daterangepicker_end"
            endDatePlaceholderText={text('End date placeholder text', 'Eind datum')}
            focusedInput={focusedInput}
            isDayBlocked={(day): boolean => day.day() === 3}
            isDisabled={boolean('Is disabled', false)}
            isOutsideRange={(): false => false}
            isRequired={boolean('Is required', false)}
            keepOpenOnDateSelect={boolean('Keep open on date select', true)}
            label={text('Label', 'Je favoriete periode')}
            minimumNights={number('Minimum nights', 1)}
            numberOfMonths={number('Number of months', 2)}
            onDatesChange={(event): void => {
                setStartDate(event.startDate);
                setEndDate(event.endDate);
            }}
            onFocusChange={(input): void => {
                setFocusedInput(input);
            }}
            shortcuts={[
                {
                    key: 1,
                    onClick: (): void => {
                        setStartDate(moment());
                        setEndDate(moment().add(1, 'd'));
                    },
                    text: 'vandaag en morgen',
                },
                {
                    key: 2,
                    onClick: (): void => {
                        setStartDate(moment().day(6));
                        setEndDate(moment().day(6).add(1, 'd'));
                    },
                    text: 'aankomend weekend',
                },
                {
                    key: 3,
                    onClick: (): void => {
                        setStartDate(moment());
                        setEndDate(moment().add(13, 'd'));
                    },
                    text: 'de komende twee weken',
                },
                {
                    key: 4,
                    onClick: (): void => {
                        setStartDate(moment().add(1, 'M').startOf('month'));
                        setEndDate(moment().add(1, 'M').endOf('month'));
                    },
                    text: 'de volgende maand',
                },
            ]}
            startDate={startDate}
            startDateId="daterangepicker_start"
            startDatePlaceholderText={text('Start date placeholder text', 'Start datum')}
        />
    );
};

export const WithYearSelector: FunctionComponent = () => {
    const [endDate, setEndDate] = useState<Moment | null>(defaultEndDate);
    const [startDate, setStartDate] = useState<Moment | null>(defaultStartDate);
    const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);

    return (
        <DateRangePicker
            displayFormat={text('Display format', 'ddd D MMM Y')}
            endDate={endDate}
            endDateId="daterangepicker_withyearselector_end"
            endDatePlaceholderText={text('End date placeholder text', 'Eind datum')}
            focusedInput={focusedInput}
            hasYearSelector
            isDayBlocked={(day): boolean => day.day() === 1}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            keepOpenOnDateSelect={boolean('Keep open on date select', true)}
            label={text('Label', 'Vakantie periode')}
            labelMonth={text('Label month', 'Maand')}
            labelYear={text('Label year', 'Jaar')}
            minimumNights={number('Minimum nights', 1)}
            numberOfMonths={1}
            onDatesChange={(event): void => {
                setStartDate(event.startDate);
                setEndDate(event.endDate);
            }}
            onFocusChange={(input): void => {
                setFocusedInput(input);
            }}
            startDate={startDate}
            startDateId="daterangepicker_withyearselector_start"
            startDatePlaceholderText={text('Start date placeholder text', 'Start datum')}
            yearCount={number('Year count', 100)}
            yearCountFuture={number('Year count future', 0)}
        />
    );
};

const ThinWrapper = styled.div`
    width: 300px;
`;

export const DatePickerAlignRight: FunctionComponent = () => {
    const [endDate, setEndDate] = useState<Moment | null>(defaultEndDate);
    const [startDate, setStartDate] = useState<Moment | null>(defaultStartDate);
    const [focusedInput, setFocusedInput] = useState<FocusedInputShape | null>(null);
    const [wrapperElementRef, setWrapperElementRef] = useState<HTMLDivElement | null>(null);

    return (
        <ThinWrapper className="Parent" ref={setWrapperElementRef}>
            <DateRangePicker
                displayFormat={text('Display format', 'ddd D MMM Y')}
                endDate={endDate}
                endDateId="daterangepicker_withyearselector_end"
                endDatePlaceholderText={text('End date placeholder text', 'Eind datum')}
                focusedInput={focusedInput}
                hasYearSelector
                isDayBlocked={(day): boolean => day.day() === 1}
                isDisabled={boolean('Is disabled', false)}
                isRequired={boolean('Is required', false)}
                keepOpenOnDateSelect={boolean('Keep open on date select', true)}
                label={text('Label', 'Vakantie periode')}
                labelMonth={text('Label month', 'Maand')}
                labelYear={text('Label year', 'Jaar')}
                minimumNights={number('Minimum nights', 1)}
                numberOfMonths={1}
                onDatesChange={(event): void => {
                    setStartDate(event.startDate);
                    setEndDate(event.endDate);
                }}
                onFocusChange={(input): void => {
                    setFocusedInput(input);
                }}
                parentContainer={wrapperElementRef || undefined}
                startDate={startDate}
                startDateId="daterangepicker_withyearselector_start"
                startDatePlaceholderText={text('Start date placeholder text', 'Start datum')}
                yearCount={number('Year count', 100)}
                yearCountFuture={number('Year count future', 0)}
            />
        </ThinWrapper>
    );
};
