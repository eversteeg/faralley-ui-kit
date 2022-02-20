import '../app/styles/fonts/cuprum/cuprum.css';
import '../app/styles/fonts/exo2/exo2.css';
import '../app/styles/fonts/firasanscondensed/firasanscondensed.css';
import '../app/styles/fonts/iconfont/iconfont.css';
import '../app/styles/fonts/opensans/opensans.css';
import '../app/styles/global.css';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { addDecorator, addParameters } from '@storybook/react';
import { boolean, select, withKnobs } from '@storybook/addon-knobs';
import moment from 'moment';
import React from 'react';
import { themeBasic } from '../app/styles/theming/themes/basic';
import { themeCyrillic } from '../app/styles/theming/themes/cyrillic';
import { themeCyrillicDark } from '../app/styles/theming/themes/cyrillicdark';
import { themeDark } from '../app/styles/theming/themes/dark';
import { withInfo } from '@storybook/addon-info';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import Wrapper from './components/Wrapper/Wrapper';
import { WrapperWidth } from './components/Wrapper/types';

// Set Moment locale to Dutch
moment.locale('nl');

// Make info and knobs addons available in all stories
addDecorator(withInfo);
addDecorator(withKnobs);

// Wrap all stories in a custom Wrapper component
addDecorator((storyFn) => (
    <Wrapper
        isTransparent={boolean('Wrapper is transparent', false)}
        width={select<WrapperWidth>('Wrapper width', WrapperWidth, WrapperWidth.LARGE)}
    >
        {storyFn()}
    </Wrapper>
));

// Add withThemesProvider setup to make themes available in all stories
addDecorator(
    withThemesProvider([
        {
            ...themeBasic,
            name: 'Basic',
        },
        {
            ...themeDark,
            name: 'Dark',
        },
        {
            ...themeCyrillic,
            name: 'Cyrillic',
        },
        {
            ...themeCyrillicDark,
            name: 'CyrillicDark',
        },
    ])
);

// Make it possible to switch between background-colors
addParameters({
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                value: themeBasic.shades.nine,
            },
            {
                name: 'intermediate',
                value: themeBasic.shades.five,
            },
            {
                name: 'dark',
                value: '#212121',
            },
            {
                name: 'blue',
                value: themeBasic.colorSecondary,
            },
            {
                name: 'purple',
                value: themeBasic.colorPrimary,
            },
        ],
    },
    info: {},
});
