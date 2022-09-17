import { Status, Theme } from '../../types';

export enum StatusComponents {
    TABLE = 'TABLE',
}

export const getStatusColor = (status: Status, theme: Theme, componentName?: StatusComponents): string => {
    switch (status) {
        case Status.NONE:
            return theme.shades.six;

        case Status.DATA_ERROR:
            return theme.colorInvalid;

        case Status.DEFAULT:
            return theme.colorPrimary;

        case Status.DISABLED:
            if (componentName && componentName === StatusComponents.TABLE) {
                return theme.colorInactive;
            }

            return theme.colorDisabled;

        case Status.INVALID:
            return theme.colorInvalid;

        case Status.VALID:
            return theme.colorValid;

        case Status.ALERT:
            return theme.colorAlert;

        case Status.TIP:
            return theme.colorSecondary;

        default:
            return theme.colorPrimary;
    }
};

export default getStatusColor;
