import { boolean, number, text } from '@storybook/addon-knobs';
import {
    getSelectedElements,
    getSelectedText,
    selectOptionsExtend,
} from '../../../utils/functions/arrayObjectFunctions';
import React, { FunctionComponent, SyntheticEvent, useEffect, useState } from 'react';
import styled, { css, SimpleInterpolation } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { data } from './mockup/data';
import DropdownMultiSelect from './DropdownMultiSelect';
import { DropdownMultiSelectOption } from './types';
import { DropdownVariant } from '../../molecules/Dropdown';

export default { title: 'organisms/DropdownMultiSelect' };

const TEXT_OPTION_ALL_SELECTED = 'All fruits selected';
const TEXT_OPTION_DESELECT_ALL = 'Deselect all fruits';
const TEXT_OPTION_SELECT_ALL = 'Select all fruits';

interface DropdownMultiSelectWrapperProps {
    topPadding: string;
}

const DropdownMultiSelectWrapper = styled.div<DropdownMultiSelectWrapperProps>`
    min-height: 500px;
    max-height: 500px;
    ${({ topPadding }): SimpleInterpolation =>
        css`
            padding-top: ${topPadding};
        `}
`;

const BaseComponent = <T extends DropdownMultiSelectOption>(
    options: Array<T>,
    variant: DropdownVariant = DropdownVariant.COMPACT,
    label = '',
    topPadding = '0px',
    withCancel = true
): JSX.Element => {
    const [optionValues, setOptionValues] = useState(options);
    const [wrapperElementRef, setWrapperElementRef] = useState<HTMLDivElement | null>(null);

    const generateValue = (Options: T[]): string => {
        const selectedOptions = getSelectedElements(Options, 'isSelected');

        return getSelectedText(selectedOptions, 'label');
    };

    const [value, setValue] = useState(generateValue(options));

    useEffect(() => {
        setValue(generateValue(optionValues));
    }, [optionValues]);

    const onConfirmCallback = (_: SyntheticEvent, updatedOptions: Array<T>): void => {
        setOptionValues(updatedOptions);

        const convertedOptions = updatedOptions.map((option) => ({
            ...option,
            IsSelected: option.isSelected,
        }));

        // eslint-disable-next-line no-console
        console.log(convertedOptions);
    };

    return (
        <DropdownMultiSelectWrapper className="Parent" ref={setWrapperElementRef} topPadding={topPadding}>
            <DropdownMultiSelect
                allSelectedLabel={text('all selected label', TEXT_OPTION_ALL_SELECTED)}
                buttonCancelText={withCancel ? text('ButtonCancel text', 'Cancel') : undefined}
                buttonConfirmText={text('Button confirm text', 'Ok')}
                deselectAllLabel={text('de-select all label', TEXT_OPTION_DESELECT_ALL)}
                errorMessage={text('Error message', 'Everything is broken, oops')}
                hasError={boolean('Has error', false)}
                isDisabled={boolean('Is disabled', false)}
                isRequired={boolean('Is required', false)}
                isValid={boolean('Is valid', false)}
                label={label}
                maxHeight={number('Max height', 400)}
                minHeight={50}
                name="the-best-fruit"
                noOptionsText={text('No options text', 'No options')}
                onCancel={withCancel ? action('On cancel') : undefined}
                onChange={action('On change')}
                onConfirm={onConfirmCallback}
                options={optionValues}
                parentContainer={wrapperElementRef || undefined}
                placeholder={text('Placeholder', 'Select the best fruits')}
                resetOnOutsideClick={boolean('resetOnOutsideClick', true)}
                selectAllLabel={text('select all label', TEXT_OPTION_SELECT_ALL)}
                variant={variant}
            />
            {value && (
                <div style={{ margin: '20px 0 0' }}>
                    {'Selected items:'}
                    {optionValues
                        .filter((item) => item.isSelected)
                        .map((item) => (
                            <p key={item.value}>{`${item.value} - ${item.label}`}</p>
                        ))}
                    {'Selected items as string:'}
                    {value}
                </div>
            )}
        </DropdownMultiSelectWrapper>
    );
};

export const ConfigurableCompactVariant: FunctionComponent = () => (
    <>
        <p>{'What is the best fruit?'}</p>
        {BaseComponent(selectOptionsExtend(data, 'Description', 'Id', 'IsSelected'))}
    </>
);

export const ConfigurableOutlineVariant: FunctionComponent = () =>
    BaseComponent(
        selectOptionsExtend(data, 'Description', 'Id', 'IsSelected'),
        DropdownVariant.OUTLINE,
        'What are the best fruits?'
    );

export const ConfigurableDropdownOpensAbove: FunctionComponent = () =>
    BaseComponent(
        selectOptionsExtend(data, 'Description', 'Id', 'IsSelected'),
        DropdownVariant.OUTLINE,
        'What are the best fruits?',
        '300px'
    );

export const ConfigurableEmptyOptions: FunctionComponent = () => (
    <>
        <p>{'What is the best fruit?'}</p>
        {BaseComponent([], DropdownVariant.OUTLINE)}
    </>
);

export const ConfigurableNoCancelButton: FunctionComponent = () => (
    <>
        <p>{'What is the best fruit?'}</p>
        {BaseComponent(
            selectOptionsExtend(data, 'Description', 'Id', 'IsSelected'),
            DropdownVariant.OUTLINE,
            'What are the best fruits?',
            '0px',
            false
        )}
    </>
);
