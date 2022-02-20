import { Alignment, ButtonSize, ButtonVariant, IconType, Locale, Status } from '../../../../types';
import { Column, Row } from 'react-table';
import { customSortByBoolean, customSortByDate } from '../utils/tableFunctions';
import React, { ReactNode } from 'react';
import { Button } from '../../../molecules/Button/Button';
import { ContentCell } from '../ContentCell/ContentCell';
import { getTableCell } from './tableFunctions';
import { Icon } from '../../../atoms/Icon/Icon';
import { StatusCell } from '../StatusCell/StatusCell';
import { sum } from '../utils/aggregateFunctions';
import { TableData } from './tableData';

const getStatusIcon = (status: Status): IconType => {
    switch (status) {
        case Status.ALERT:
            return IconType.ROUND_INFO;

        case Status.DEFAULT:
            return IconType.CHECK;

        case Status.DISABLED:
            return IconType.ROUND_HELP;

        case Status.INVALID:
            return IconType.ROUND_CROSS;

        case Status.NONE:
            return IconType.ROUND_MINUS;

        case Status.VALID:
            return IconType.CHECK;

        default:
            return IconType.CHECK;
    }
};

export const getBooleanText = (value: boolean): string => (value === true ? 'Yes' : 'No');

export const tableColumns = (isMultiSelect: boolean): Column<TableData>[] => [
    {
        Aggregated: () => 'Totalen',
        Cell: ({ value }): ReactNode => (
            <StatusCell hasStatusIndicator={!isMultiSelect} icon={getStatusIcon(value)} status={value} />
        ),
        accessor: 'status',
        aggregate: 'text',
        disableSortBy: true,
        hasCellPadding: false,
        width: 56,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: 'First Name',
        accessor: 'firstName',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onClick: (cell: any, row: any, event: any): any => getTableCell(cell, row, event),
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={getBooleanText(value || false)} />,
        Header: 'Test sort boolean',
        accessor: 'isRowSelected',
        width: '100',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell isBold value={value} />,
        Header: 'Last Name',
        accessor: 'lastName',
        width: '35%',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: 'Infix',
        accessor: 'infix',
        width: 75.5,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell hasLineThrough value={value} />,
        Header: 'Company',
        accessor: 'companyName',
        width: '30%',
    },
    {
        Aggregated: ({ rows }) => rows,
        Cell: ({ value }): ReactNode => <ContentCell isCurrency value={value} />,
        Header: 'Amount',
        accessor: 'amount',
        aggregate: 'sum',
        align: Alignment.RIGHT,
        isCurrency: true,
    },
    {
        Aggregated: ({ rows }) => rows,
        Cell: ({ value }): ReactNode => <ContentCell isCurrency locale={Locale.EN} value={value} />,
        Header: 'Amount',
        accessor: 'Amount',
        aggregate: 'sum',
        align: Alignment.RIGHT,
        isCurrency: true,
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: 'Startdate',
        accessor: 'relationStart',
        sortType: (a: Row<TableData>, b: Row<TableData>, propName: string): -1 | 1 =>
            customSortByBoolean(a, b, propName),
    },
    {
        Aggregated: ({ rows }) =>
            sum(rows.map((row) => (row.values.info !== undefined ? (row.values.info as number | string) : 0))),
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: <Icon type={IconType.CARDS} />,
        accessor: 'info',
        aggregate: 'sum',
        sortType: 'basic',
        width: 60,
    },
    {
        Cell: ({ value }): ReactNode => (
            <ContentCell
                value={
                    <Button
                        iconType={IconType.SELECT}
                        onClick={(event): void => {
                            event.stopPropagation();
                            // eslint-disable-next-line no-alert
                            alert(`On click => ${value}`);
                        }}
                        size={ButtonSize.SMALL}
                        variant={ButtonVariant.TEXT_ONLY}
                    >
                        {`Button ${value}`}
                    </Button>
                }
            />
        ),
        Header: 'Action with breaking text and three lines',
        accessor: 'id',
        align: Alignment.RIGHT,
        disableSortBy: true,
        width: 150,
    },
];

export const tableColumnsWithGroupHeader = (isMultiSelect: boolean): Column<TableData>[] => [
    {
        Header: 'Name',
        columns: [
            {
                Cell: ({ value }): ReactNode => (
                    <StatusCell hasStatusIndicator={!isMultiSelect} icon={getStatusIcon(value)} status={value} />
                ),
                accessor: 'status',
                disableSortBy: true,
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell value={value} />,
                Header: 'First Name',
                accessor: 'firstName',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick: (cell: any, row: any, event: any): unknown => getTableCell(cell, row, event),
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell isBold value={value} />,
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell value={value} />,
                Header: 'Infix',
                accessor: 'infix',
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell value={value} />,
                Header: 'Startdate',
                accessor: 'relationStart',
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                sortType: (a: any, b: any, propName: any): any => customSortByDate(a, b, propName),
            },
        ],
    },
    {
        Header: 'InfoGroup',
        columns: [
            {
                Cell: ({ value }): ReactNode => <ContentCell hasLineThrough value={value} />,
                Header: 'Company',
                accessor: 'companyName',
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell hasNegativeAmountColor isCurrency value={value} />,
                Header: 'Amount',
                accessor: 'amount',
            },
            {
                Cell: ({ value }): ReactNode => <ContentCell value={value} />,
                Header: 'Info',
                accessor: 'info',
                sortType: 'basic',
            },
            {
                Cell: ({ value }): ReactNode => (
                    <ContentCell
                        value={
                            <Button
                                iconType={IconType.SELECT}
                                onClick={(event): void => {
                                    event.stopPropagation();
                                    // eslint-disable-next-line no-alert
                                    alert(`On click => ${value}`);
                                }}
                                size={ButtonSize.SMALL}
                                variant={ButtonVariant.TEXT_ONLY}
                            >
                                {`Button ${value}`}
                            </Button>
                        }
                    />
                ),
                Header: 'Action with breaking text',
                accessor: 'id',
                align: Alignment.RIGHT,
                disableSortBy: true,
            },
        ],
    },
];

export const tableColumnsPicklistMultiSelect = (): Column<TableData>[] => [
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: 'First Name',
        accessor: 'firstName',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell isBold value={value} />,
        Header: 'Last Name',
        accessor: 'lastName',
    },
    {
        Cell: ({ value }): ReactNode => <ContentCell value={value} />,
        Header: 'Infix',
        accessor: 'infix',
        width: 75.5,
    },
];
