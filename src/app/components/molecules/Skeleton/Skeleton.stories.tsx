import { boolean, number, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import Skeleton from './Skeleton';

export default { title: 'molecules/Skeleton' };

export const Configurable: FunctionComponent = () => (
    <Skeleton
        circle={boolean('Is circle', false)}
        count={number('How many items', 1)}
        duration={number('Duration', 1.2)}
        height={text('Height', '')}
        width={text('Width', '')}
    />
);
