import {
    Circle,
    Header,
    Indicator,
    Item,
    ItemWrapper,
    Row,
    StyledTableSkeleton,
    TableHeader,
    TablePaginator,
    TablePaginatorRow,
} from './TableSkeleton.sc';
import React, { FunctionComponent } from 'react';
import Skeleton from '../../../molecules/Skeleton/Skeleton';

export interface TableSkeletonProps {
    isPaginatorVisible?: boolean;
    isTableHeaderVisible?: boolean;
    isTitleVisible?: boolean;
    numberOfRowsPerTable?: number;
    numberOfTables?: number;
    showRowsInCard?: boolean;
}

export const TableSkeleton: FunctionComponent<TableSkeletonProps> = ({
    isPaginatorVisible = false,
    isTableHeaderVisible = true,
    isTitleVisible = false,
    numberOfRowsPerTable = 5,
    numberOfTables = 1,
    showRowsInCard = false,
}) => (
    <>
        {Array.from(Array(numberOfTables).keys()).map((keyTable) => (
            <StyledTableSkeleton id={`${StyledTableSkeleton}keyTable`} key={keyTable}>
                {isTitleVisible && (
                    <Header>
                        <Skeleton />
                    </Header>
                )}
                {isTableHeaderVisible && (
                    <TableHeader>
                        <Skeleton />
                    </TableHeader>
                )}
                <ItemWrapper showRowsInCard={showRowsInCard}>
                    {Array.from(Array(numberOfRowsPerTable).keys()).map((keyRow) => (
                        <Item key={keyRow}>
                            <Indicator>
                                <Skeleton height="100%" />
                            </Indicator>
                            <Circle>
                                <Skeleton height="100%" />
                            </Circle>
                            <Row>
                                <Skeleton height="100%" />
                            </Row>
                        </Item>
                    ))}
                </ItemWrapper>
                {isPaginatorVisible && (
                    <TablePaginatorRow id="TablePaginatorRow">
                        <TablePaginator>
                            <Skeleton />
                        </TablePaginator>
                    </TablePaginatorRow>
                )}
            </StyledTableSkeleton>
        ))}
    </>
);
