import { boolean, number, select, text } from '@storybook/addon-knobs';
import { ButtonSize, ButtonVariant, Easing, IconType, SidePanelSize } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import SidePanel from './SidePanel';

export default { title: 'organisms/SidePanel' };

const functionalItems = [
    <Button iconType={IconType.CHECK} key={1} onClick={action('On button CHECK 1')} size={ButtonSize.SMALL}>
        {'label'}
    </Button>,
    <Button iconType={IconType.CHECK} isDisabled key={2} onClick={action('On button CHECK 2')} size={ButtonSize.SMALL}>
        {'longer label'}
    </Button>,
];

export const Configurable: FunctionComponent = () => (
    <SidePanel
        buttons={[
            {
                iconType: IconType.CROSS,
                onClick: action('On back'),
            },
        ]}
        isVisible
        options={functionalItems}
        title={text('Header title', 'Heading')}
    />
);

export const ConfigurableSidePanel: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky] = useState(true);
    const [hasSubheader, setHasSubheader] = useState(false);

    const onBack = (): void => {
        action('On back');
        setIsVisible(false);
    };

    return (
        <>
            <Button
                onClick={(): void => {
                    action('On back');
                    setIsVisible(true);
                }}
                variant={ButtonVariant.FILLED}
            >
                {isVisible ? 'SIDE PANEL IS SHOWING' : 'SHOW SIDE PANEL'}
            </Button>
            <SidePanel
                buttons={[
                    {
                        iconType: IconType.CROSS,
                        onClick: onBack,
                    },
                ]}
                isModalSidePanel={boolean('Is within modal', false)}
                isSticky={boolean('Sticky', isSticky)}
                isVisible={isVisible}
                options={functionalItems}
                size={select('Size', SidePanelSize, SidePanelSize.MEDIUM)}
                subHeader={
                    hasSubheader ? (
                        <div
                            style={{
                                backgroundColor: 'blue',
                                border: '1px solid #000',
                                color: 'white',
                            }}
                        >
                            {'Subheader comes here'}
                        </div>
                    ) : undefined
                }
                title={text('Header title', 'Heading')}
                transitionDuration={number('Transition duration', 500)}
                transitionEasing={select('Transition type', Easing, Easing.EASE)}
            >
                <div>
                    {
                        'BODY: QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY QWERTY '
                    }
                </div>
                <Button
                    onClick={(): void => {
                        setHasSubheader(!hasSubheader);
                    }}
                    size={ButtonSize.SMALL}
                    variant={ButtonVariant.FILLED}
                >
                    {hasSubheader ? 'Hide Subheader' : 'Show Subheader'}
                </Button>
                <div>{isSticky ? 'STICKY BUSINESS' : 'NON STICKY BUSINESS'}</div>
            </SidePanel>
        </>
    );
};
