module.exports = {
    addons: [
        '@storybook/addon-knobs',
        '@storybook/addon-actions',
        '@storybook/addon-backgrounds',
        'storybook-addon-styled-component-theme/dist/',
    ],
    core: {
        builder: 'webpack5',
    },
    stories: ['../**/*.stories.tsx'],
};
