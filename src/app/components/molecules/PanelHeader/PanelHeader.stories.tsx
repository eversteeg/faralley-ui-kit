import { boolean, select, text } from '@storybook/addon-knobs';
import { ButtonSize, ButtonVariant, IconType, Status } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../Button/Button';
import PanelHeader from './PanelHeader';
import Toolbar from '../../organisms/Toolbar/Toolbar';

export default { title: 'molecules/PanelHeader' };

export const Configurable: FunctionComponent = () => (
    <PanelHeader
        hasCapitalizedTitle={boolean('Is title capitalized', true)}
        hasTitleStatusAppearance={boolean('Has title status appearance', true)}
        iconType={select('Icon type', IconType, IconType.GEAR)}
        isDisabled={boolean('Is disabled', false)}
        isLoading={boolean('Is loading', false)}
        isReversed={boolean('Is reversed', false)}
        options={
            <Button iconType={IconType.CHECK} onClick={action('On click')} variant={ButtonVariant.TEXT_ONLY}>
                {'Apply'}
            </Button>
        }
        status={select('Status', Status, Status.ALERT)}
        title={text('Title', 'settings')}
    />
);

export const ConfigurableWithMultipleButtons: FunctionComponent = () => (
    <PanelHeader
        hasCapitalizedTitle={boolean('Is title capitalized', true)}
        hasTitleStatusAppearance={boolean('Has title status appearance', true)}
        iconType={select('Icon type', IconType, IconType.GEAR)}
        isDisabled={boolean('Is disabled', false)}
        isLoading={boolean('Is loading', false)}
        isReversed={boolean('Is reversed', false)}
        options={
            <Toolbar>
                <Button iconType={IconType.CHECK} onClick={action('On click')} variant={ButtonVariant.TEXT_ONLY}>
                    {'Apply'}
                </Button>
                <Button iconType={IconType.SELECT} onClick={action('On click')} size={ButtonSize.SMALL}>
                    {'Select'}
                </Button>
            </Toolbar>
        }
        status={select('Status', Status, Status.DEFAULT)}
        title={text('Title', 'settings')}
    />
);
