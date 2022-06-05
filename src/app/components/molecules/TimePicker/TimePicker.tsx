import { DropdownWrapper, StyledTimePicker } from './TimePicker.sc';
import React, { FunctionComponent, ReactNode, useMemo, useState } from 'react';
import { Dropdown } from '../Dropdown';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import SelectOption from '../../atoms/SelectOption/SelectOption';

export interface TimePickerProps {
    autoFocus?: boolean;
    errorMessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    minuteStep?: number;
    name: string;
    onChange: (name: string, time: TimePickerProps['value']) => void;
    placeholderHours?: string;
    placeholderMinutes?: string;
    value: [string, string];
}

export const TimePicker: FunctionComponent<TimePickerProps> = ({
    autoFocus = false,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isRequired = false,
    minuteStep = 5,
    name,
    onChange,
    placeholderHours,
    placeholderMinutes,
    value,
}) => {
    const [timeValue, setTimeValue] = useState<[string, string]>(
        value === null || (isEmpty(value[0]) && isEmpty(value[1]))
            ? [placeholderHours || '', placeholderMinutes || '']
            : value
    );

    const hours = useMemo(
        () =>
            Array.from(Array(24).keys()).map((key) => {
                if (key < 10) {
                    return `0${key}`;
                }

                return key.toString();
            }),
        []
    );

    const minutes = useMemo(
        () =>
            Array.from(Array(12).keys()).map((key) => {
                const minute = key * minuteStep;

                if (minute < 10) {
                    return `0${minute}`;
                }

                return minute.toString();
            }),
        [minuteStep]
    );

    return (
        <>
            <StyledTimePicker>
                <DropdownWrapper>
                    <Dropdown
                        autoFocus={autoFocus}
                        hasError={hasError}
                        isDisabled={isDisabled}
                        isRequired={isRequired}
                        name={`${name}-hours`}
                        onChange={({ currentTarget }): void => {
                            setTimeValue([currentTarget.value, timeValue[1]]);
                            onChange(name, [currentTarget.value, timeValue[1]]);
                        }}
                        placeholder={placeholderHours}
                        value={timeValue[0]}
                    >
                        {hours.map((hour) => (
                            <SelectOption key={hour} value={hour}>
                                {hour}
                            </SelectOption>
                        ))}
                    </Dropdown>
                </DropdownWrapper>
                <DropdownWrapper>
                    <Dropdown
                        hasError={hasError}
                        isDisabled={isDisabled}
                        name={`${name}-minutes`}
                        onChange={({ currentTarget }): void => {
                            setTimeValue([timeValue[0], currentTarget.value]);
                            onChange(name, [timeValue[0], currentTarget.value]);
                        }}
                        placeholder={placeholderMinutes}
                        value={timeValue[1]}
                    >
                        {minutes.map((minute) => (
                            <SelectOption key={minute} value={minute}>
                                {minute}
                            </SelectOption>
                        ))}
                    </Dropdown>
                </DropdownWrapper>
            </StyledTimePicker>
            {hasError && !isDisabled && <ErrorMessage isOutlineVariant={false}>{errorMessage}</ErrorMessage>}
        </>
    );
};

export default TimePicker;
