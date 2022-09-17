import { getStatusColor, StatusComponents } from './getStatusColor';
import { Placement, Status, StatusIndicatorSize, Theme } from '../../types';

export const getStatusIndicator = ({
    placement = Placement.LEFT,
    size = StatusIndicatorSize.LARGE,
    status = Status.DEFAULT,
    theme,
}: {
    placement?: Placement;
    size?: StatusIndicatorSize;
    status?: Status;
    theme: Theme;
}): string => `
    border-${placement}: ${theme.spacing(
    // eslint-disable-next-line no-nested-ternary
    size === StatusIndicatorSize.NONE ? 0 : size === StatusIndicatorSize.LARGE ? 1 : 0.5
)} solid ${getStatusColor(status, theme, status === Status.DISABLED ? StatusComponents.TABLE : undefined)};
`;

export default getStatusIndicator;
