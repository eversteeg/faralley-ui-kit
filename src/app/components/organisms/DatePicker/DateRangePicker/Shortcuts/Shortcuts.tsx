import { ButtonWrapper, StyledShortcuts, Text, Wrapper } from './Shortcuts.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode, useState } from 'react';
import Chip from '../../../../molecules/Chip/Chip';
import { IconType } from '../../../../../types';

export interface Shortcut {
    key: number;
    onClick: MouseEventHandler;
    text: ReactNode;
}

interface ShortCutsProps {
    children?: never;
    shortcuts: Shortcut[];
    text?: ReactNode;
}

export const Shortcuts: FunctionComponent<ShortCutsProps> = ({ shortcuts, text }) => {
    const [selectedKey, setSelectedKey] = useState(0);

    return (
        <StyledShortcuts>
            {text && <Text>{text}</Text>}
            <Wrapper>
                {shortcuts.map(({ onClick, text: shortcutText, key }, index) => (
                    <ButtonWrapper key={typeof shortcutText === 'string' ? shortcutText : index}>
                        <Chip
                            iconType={key === selectedKey ? IconType.SELECT : undefined}
                            isSelected={key === selectedKey}
                            onClick={(event) => {
                                setSelectedKey(key);
                                onClick(event);
                            }}
                        >
                            {shortcutText}
                        </Chip>
                    </ButtonWrapper>
                ))}
            </Wrapper>
        </StyledShortcuts>
    );
};

export default Shortcuts;
