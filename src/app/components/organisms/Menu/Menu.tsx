import React, { Fragment, FunctionComponent, useState } from 'react';
import Item from './Item/Item';
import { MenuItems } from './types';
import { StyledMenu } from './Menu.sc';

export interface MenuProps {
    children?: never;
    className?: string;
    defaultOpenItemPath?: string;
    items: MenuItems;
}

export const Menu: FunctionComponent<MenuProps> = ({ className, defaultOpenItemPath, items }) => {
    const [openItemPath, setOpenItemPath] = useState(defaultOpenItemPath);

    const handleSetOpenItem = (path: string): void => {
        setOpenItemPath(openItemPath === path ? '' : path);
    };

    return (
        <StyledMenu className={className}>
            {items.map(({ children, iconType, isDisabled, isVisible, onClick, path, text }) => {
                if (children && children.length > 0) {
                    const isOpen = openItemPath === path;

                    return (
                        <Fragment key={path}>
                            <Item
                                hasChildren
                                iconType={iconType}
                                isDisabled={isDisabled}
                                isOpen={isOpen}
                                isParent
                                isVisible={isVisible}
                                onClick={(): void => {
                                    if (onClick) {
                                        onClick();
                                    }

                                    handleSetOpenItem(path);
                                }}
                            >
                                {text}
                            </Item>
                            {isOpen &&
                                children.map((child) => (
                                    <Item
                                        iconType={child.iconType}
                                        isChildMenuItem
                                        isDisabled={child.isDisabled}
                                        isParent={false}
                                        isVisible={child.isVisible}
                                        key={child.path}
                                        onClick={child.onClick}
                                        path={child.path}
                                    >
                                        {child.text}
                                    </Item>
                                ))}
                        </Fragment>
                    );
                }

                return (
                    <Item iconType={iconType} isDisabled={isDisabled} isParent key={path} onClick={onClick} path={path}>
                        {text}
                    </Item>
                );
            })}
        </StyledMenu>
    );
};

export default Menu;
