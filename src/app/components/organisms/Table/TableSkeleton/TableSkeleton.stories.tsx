import { boolean, number } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import { TableSkeleton } from './TableSkeleton';

export default { title: 'organisms/TableSkeleton' };

export const Configurable: FunctionComponent = () => (
    <TableSkeleton
        isPaginatorVisible={boolean('Is paginator visible', false)}
        isTableHeaderVisible={boolean('Is table header visible', true)}
        isTitleVisible={boolean('Is title visible', false)}
        numberOfRowsPerTable={number('Number of rows per table', 5)}
        numberOfTables={number('Number of tables', 1)}
        showRowsInCard={boolean('Show rows in card', false)}
    />
);
