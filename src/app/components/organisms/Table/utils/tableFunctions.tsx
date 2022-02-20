/* eslint-disable @typescript-eslint/ban-types */
import React, { ReactNode } from 'react';
import { TableInstance, UseGroupByRowProps, UseSortByColumnProps, UseTableRowProps } from 'react-table';
import Icon from '../../../atoms/Icon/Icon';
import { IconType } from '../../../../types';

export const compareValues =
    <T extends Record<string, unknown>>(
        key: keyof UseTableRowProps<T>['values'] | keyof UseGroupByRowProps<T>['values'],
        desc = false,
        caseSensitive = false
    ) =>
    (a: UseTableRowProps<T>, b: UseTableRowProps<T>): number => {
        if (!Object.prototype.hasOwnProperty.call(a.values, key)) {
            return 0;
        }

        const varA =
            typeof a.values[key] === 'string' && caseSensitive
                ? (a.values[key] as string).toUpperCase()
                : a.values[key];

        const varB =
            typeof b.values[key] === 'string' && caseSensitive
                ? (b.values[key] as string).toUpperCase()
                : b.values[key];

        let comparison = 0;

        if (varA >= varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }

        return desc ? comparison * -1 : comparison;
    };

export const customSortByDate = <T extends object>(
    a: UseTableRowProps<T>,
    b: UseTableRowProps<T>,
    key: keyof UseTableRowProps<T>['values'] | keyof UseGroupByRowProps<T>['values'],
    emptyValuesAtEnd = true
): -1 | 1 => {
    const valueA = a.values[key];
    const valueB = b.values[key];

    if (!emptyValuesAtEnd && !valueA) {
        return -1;
    }

    if (emptyValuesAtEnd && !valueB) {
        return -1;
    }

    return valueA < valueB ? -1 : 1;
};

export const customSortByCaseInsensitive = <T extends Record<string, unknown>>(
    rows: UseTableRowProps<T>[],
    key: keyof UseTableRowProps<T>['values'] | keyof UseGroupByRowProps<T>['values']
): UseTableRowProps<T>[] =>
    // @TODO: figure out how to get the active sortBy values/props and possibly deal with paging?
    rows.sort(compareValues<T>(key));

export const customSortByBoolean = <T extends object>(
    a: UseTableRowProps<T>,
    b: UseTableRowProps<T>,
    key: keyof UseTableRowProps<T>['values'] | keyof UseGroupByRowProps<T>['values'],
    desc = true
): -1 | 1 => {
    const valueA = Boolean(a.values[key]).toString();
    const valueB = Boolean(b.values[key]).toString();

    if (desc) {
        return valueA.localeCompare(valueB) > 0 ? 1 : -1;
    }

    return valueB.localeCompare(valueA) > 0 ? -1 : 1;
};

export const renderSortIcon = <T extends object>(
    column: UseSortByColumnProps<T>,
    hasUnsortedStateIcon = false
): ReactNode => {
    let iconType = null;

    if (column.isSorted) {
        iconType = column.isSortedDesc ? IconType.DROPDOWN : IconType.DROPUP;
    } else if (hasUnsortedStateIcon) {
        iconType = IconType.DROPDOWN;
    }

    return iconType ? <Icon className="icon" type={iconType} /> : null;
};

export const getColumnWidthByPercentage = (availableWidth: number, requestedPercentage: number): number =>
    Math.round((requestedPercentage / 100) * availableWidth);

export interface SelectableRowObject {
    isRowSelected?: boolean;
}

// This function is meant to be used for preselecting selected data.
// Not handling selected items
export const getSelectedRowIds = <T extends SelectableRowObject>(data: Array<T>): Record<string, boolean> => {
    const getSelectedIds: number[] = [];
    data.forEach((item, index) => item.isRowSelected && getSelectedIds.push(index));

    return getSelectedIds.reduce(
        (accumulator, currentValue) => ({
            ...accumulator,
            [currentValue.toString()]: true,
        }),
        {}
    );
};

// Convenience function so you can skip the map function all the time
export const getSelectedRows = <T extends object>(instance: TableInstance<T>): T[] =>
    instance.selectedFlatRows.map((d) => d.original);
