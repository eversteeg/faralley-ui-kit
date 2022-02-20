import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import Card from './Card';
import { Elevation } from '../../../types';
import styled from 'styled-components';

export default { title: 'atoms/Card' };

export const Configurable: FunctionComponent = () => (
    <Card
        elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
        hasBorderRadius={boolean('Has border radius', true)}
    >
        {text('Text', 'Configure me!')}
    </Card>
);

export const ConfigurableWithComponent: FunctionComponent = () => (
    <Card
        elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
        hasBorderRadius={boolean('Has border radius', false)}
    >
        <Button onClick={action('On click')}>{'Button for testing'}</Button>
    </Card>
);

const Cards = styled.div`
    display: flex;
    justify-content: center;
`;

const CardWrapper = styled.div`
    display: flex;
    align-items: stretch;
    margin: 0 8px;
    width: 100%;
    max-width: 304px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
`;

export const FullheightContent: FunctionComponent = () => (
    <Cards>
        <CardWrapper>
            <Card
                elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
                hasBorderRadius={boolean('Has border radius', false)}
                hasFullheightContent
            >
                <Content>
                    <h2 style={{ marginTop: 0 }}>{'Some title'}</h2>
                    <p>{'Some content about sports.'}</p>
                    <div style={{ marginTop: 'auto' }} />
                    <Button isFullWidth onClick={action('On click')}>
                        {'Buttons on same line, nice!'}
                    </Button>
                </Content>
            </Card>
        </CardWrapper>
        <CardWrapper>
            <Card
                elevation={select('Elevation', Elevation, Elevation.LEVEL_1)}
                hasBorderRadius={boolean('Has border radius', false)}
                hasFullheightContent
            >
                <Content>
                    <h2 style={{ marginTop: 0 }}>{'Some title'}</h2>
                    <p>
                        {'Some content that is so much longer than in the other card. In fact, it is so long, the '}
                        {'writers said they never saw a text this long! It was perfect: perfect length. Actually, it '}
                        {'was hugely perfectly long.'}
                    </p>
                    <Button onClick={action('On click')}>{'Buttons on same line, nice!'}</Button>
                </Content>
            </Card>
        </CardWrapper>
    </Cards>
);
