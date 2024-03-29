import { IconType } from '../../../types';
import { ReactNode } from 'react';

export interface MenuItemChild {
    iconType?: IconType;
    isChildMenuItem?: boolean;
    isDisabled?: boolean;
    isVisible?: boolean;
    onClick?: () => void;
    path: string;
    text: ReactNode;
}

export interface MenuItem extends MenuItemChild {
    children?: MenuItemChild[];
    iconType: IconType;
}

export type MenuItems = MenuItem[];
