import { boolean, number, select, text } from '@storybook/addon-knobs';
import { Direction, Easing, SelectionControlSize } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import SelectionControl from './SelectionControl';
import { SelectionControlType } from './types';

export default { title: 'molecules/SelectionControl' };

export const ConfigurableRadioButton: FunctionComponent = () => {
    const [gender, setGender] = useState('female');
    const direction = select('Direction', Direction, Direction.LTR);
    const hasAlternativeTextStyle = boolean('Has alternative textstyle', false);
    const hasError = boolean('Has error', false);
    const isDisabled = boolean('Is disabled', false);
    const isValid = boolean('Is valid', false);
    const isTableElement = boolean('Is table element', false);
    const transitionDuration = number('Transition duration', 300);
    const transitionEasing = select('Transition type', Easing, Easing.EASE);

    return (
        <>
            <p>{'Select your gender'}</p>
            <br />
            <SelectionControl
                direction={direction}
                hasAlternativeTextStyle={hasAlternativeTextStyle}
                hasError={hasError}
                hasHorizontalCorrection={boolean('Has horizontal correction', true)}
                hasVerticalCorrection={boolean('Has vertical correction', false)}
                isChecked={gender === 'female'}
                isDisabled={isDisabled}
                isTableElement={isTableElement}
                isValid={isValid}
                label={text('Label 1', 'Im a girl')}
                name="a-radio-button-name"
                onChange={(): void => {
                    setGender('female');
                }}
                size={select('Size', SelectionControlSize, SelectionControlSize.DEFAULT)}
                transitionDuration={transitionDuration}
                transitionEasing={transitionEasing}
                type={SelectionControlType.RADIO}
                value="female"
            />
            <div style={{ height: '12px' }} />
            <SelectionControl
                direction={direction}
                errorMessage={text('Errormessage', 'Oops, something went wrong!')}
                hasAlternativeTextStyle={hasAlternativeTextStyle}
                hasError={hasError}
                hasHorizontalCorrection={boolean('Has horizontal correction', true)}
                hasVerticalCorrection={boolean('Has vertical correction', false)}
                isChecked={gender === 'male'}
                isDisabled={isDisabled}
                isTableElement={isTableElement}
                isValid={isValid}
                label={text('Label 2', 'Im a boy')}
                name="a-radio-button-name"
                onChange={(): void => {
                    setGender('male');
                }}
                size={select('Size', SelectionControlSize, SelectionControlSize.DEFAULT)}
                transitionDuration={transitionDuration}
                transitionEasing={transitionEasing}
                type={SelectionControlType.RADIO}
                value="male"
            />
        </>
    );
};

export const ConfigurableCheckbox: FunctionComponent = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <SelectionControl
            direction={select('Direction', Direction, Direction.LTR)}
            errorMessage={text('Errormessage', 'Oops, something went wrong!')}
            hasAlternativeTextStyle={boolean('Has alternative textstyle', false)}
            hasError={boolean('Has error', false)}
            hasHorizontalCorrection={boolean('Has horizontal correction', true)}
            hasVerticalCorrection={boolean('Has vertical correction', false)}
            isChecked={isChecked}
            isDisabled={boolean('Is disabled', false)}
            isIndeterminate={boolean('Is indeterminate', false)}
            isTableElement={boolean('Is table element', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'Im a girl')}
            name="a-checkbox-name"
            onChange={(): void => {
                setIsChecked(!isChecked);
            }}
            size={select('Size', SelectionControlSize, SelectionControlSize.DEFAULT)}
            transitionDuration={number('Transition duration', 300)}
            transitionEasing={select('Transition type', Easing, Easing.EASE)}
            type={SelectionControlType.CHECKBOX}
            value="female"
        />
    );
};
