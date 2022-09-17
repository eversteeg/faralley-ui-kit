/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Direction, IconSize, IconType } from '../../../../types';
import { IconWrapper, Inner, StyledItem, TextWrapper } from './Item.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { IconCustomizable } from '../../../molecules/IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../../../molecules/IconCustomizable/types';
import { NavLink } from 'react-router-dom';
import TextWithOptionalIcon from '../../../molecules/TextWithOptionalIcon/TextWithOptionalIcon';

interface ItemsProps {
    children?: ReactNode;
    hasChildren?: boolean;
    iconType?: IconType;
    isChildMenuItem?: boolean;
    isDisabled?: boolean;
    isOpen?: boolean;
    isParent?: boolean;
    isVisible?: boolean;
    onClick?: MouseEventHandler;
    path?: string;
}

const Item: FunctionComponent<ItemsProps> = ({
    children = undefined,
    hasChildren = false,
    iconType = undefined,
    isDisabled = false,
    isChildMenuItem = false,
    isVisible = true,
    isOpen = false,
    isParent = false,
    onClick = undefined,
    path = undefined,
}) =>
    isVisible ? (
        <StyledItem hasChildren={hasChildren} isDisabled={isDisabled} isParent={isParent}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <Inner as={path ? NavLink : ('div' as any)} onClick={isDisabled ? null : onClick} to={path}>
                <TextWrapper>
                    <TextWithOptionalIcon
                        direction={isParent ? Direction.LTR : Direction.RTL}
                        iconSize={IconSize.MEDIUM}
                        iconType={iconType}
                        isChildMenuItem={isChildMenuItem}
                        isTruncatable
                    >
                        {children}
                    </TextWithOptionalIcon>
                </TextWrapper>
                {hasChildren && (
                    <IconWrapper>
                        <IconCustomizable
                            iconSize={IconCustomizableSize.SIZE20}
                            iconType={isOpen ? IconType.CHEVRONUP : IconType.CHEVRONDOWN}
                        />
                    </IconWrapper>
                )}
            </Inner>
        </StyledItem>
    ) : (
        <span />
    );

export default Item;
