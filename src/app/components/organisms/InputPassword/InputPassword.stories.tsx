import { boolean, number, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import InputPassword from './InputPassword';
import { InputVariant } from '../../../types';

export default { title: 'organisms/InputPassword' };

export const Configurable: FunctionComponent = () => {
    const [value, setValue] = useState('');

    return (
        <InputPassword
            errorMessage={text('Error message', 'Help, something went wrong!')}
            hasError={boolean('Has error', false)}
            isDisabled={boolean('Is disabled', false)}
            isRequired={boolean('Is required', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'Your password')}
            maxLength={number('Max length', 100)}
            minLength={number('Min length', 0)}
            name="a-inputpassword-name"
            onChange={(event): void => {
                setValue(event.currentTarget.value);
            }}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
