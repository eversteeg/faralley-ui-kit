import { Direction, Easing, IconType, SelectionControlSize } from '../../../types';
import {
    ErrorMessageWrapper,
    FakeInput,
    IconWrapper,
    InputWrapper,
    LabelWrapper,
    StyledSelectionControl,
} from './SelectionControl.sc';
import React, { ChangeEvent, FunctionComponent, MouseEvent, ReactNode, useCallback, useState } from 'react';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import { IconCustomizable } from '../IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../IconCustomizable/types';
import Label from '../../atoms/Label/Label';
import { SelectionControlType } from './types';

export interface SelectionControlProps {
    children?: never;
    className?: string;
    direction?: Direction;
    errorMessage?: ReactNode;
    hasAlternativeTextStyle?: boolean;
    hasError?: boolean;
    hasHorizontalCorrection?: boolean;
    hasVerticalCorrection?: boolean;
    isChecked?: boolean;
    isDisabled?: boolean;
    isIndeterminate?: boolean;
    isTableElement?: boolean;
    isValid?: boolean;
    label: ReactNode;
    name: string;
    onChange?: (event: ChangeEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => void;
    size?: SelectionControlSize;
    transitionDuration?: number;
    transitionEasing?: Easing;
    type?: SelectionControlType;
    value: string | number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SelectionControl: FunctionComponent<SelectionControlProps & { [key: string]: any }> = ({
    className,
    direction = Direction.LTR,
    errorMessage,
    hasAlternativeTextStyle = false,
    hasError = false,
    hasHorizontalCorrection = true,
    hasVerticalCorrection = false,
    isChecked = false,
    isDisabled = false,
    isIndeterminate = false,
    isTableElement = false,
    isValid = false,
    label,
    name,
    onChange,
    size = SelectionControlSize.DEFAULT,
    transitionDuration = 300,
    transitionEasing = Easing.EASE,
    type = SelectionControlType.CHECKBOX,
    value,
    ...rest
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const onToggleHover = useCallback(() => {
        setIsHovered(!isHovered);
    }, [isHovered]);

    return (
        <>
            <StyledSelectionControl
                className={className}
                hasHorizontalCorrection={hasHorizontalCorrection}
                hasVerticalCorrection={hasVerticalCorrection}
                onMouseEnter={onToggleHover}
                onMouseLeave={onToggleHover}
                size={size}
                type={type}
                {...rest}
            >
                <InputWrapper
                    direction={direction}
                    isDisabled={isDisabled}
                    size={size}
                    transitionDuration={transitionDuration}
                    transitionEasing={transitionEasing}
                >
                    <FakeInput
                        hasError={hasError}
                        isChecked={isChecked}
                        isDisabled={isDisabled}
                        isHovered={isHovered}
                        isIndeterminate={isIndeterminate}
                        isTableElement={isTableElement}
                        isValid={isValid}
                        size={size}
                        type={type}
                    />
                    {(isChecked || isIndeterminate) && type === SelectionControlType.CHECKBOX && (
                        <IconWrapper isDisabled={isDisabled} isValid={isValid}>
                            <IconCustomizable
                                iconSize={IconCustomizableSize.SIZE20}
                                iconType={isChecked ? IconType.CHECKBOXCHECK : IconType.CHECKBOXMINUS1}
                            />
                        </IconWrapper>
                    )}
                    <input
                        checked={isChecked}
                        disabled={isDisabled}
                        name={name}
                        onChange={onChange}
                        type={type}
                        value={value}
                    />
                </InputWrapper>
                <LabelWrapper direction={direction} isDisabled={isDisabled} onClick={onChange}>
                    <Label
                        hasAlternativeTextStyle={hasAlternativeTextStyle}
                        hasError={hasError}
                        isDisabled={isDisabled}
                        isSelectionControlLabel
                        isValid={isValid}
                    >
                        {label}
                    </Label>
                </LabelWrapper>
            </StyledSelectionControl>
            {errorMessage && hasError && !isDisabled && (
                <ErrorMessageWrapper>
                    <ErrorMessage isOutlineVariant={false}>{errorMessage}</ErrorMessage>
                </ErrorMessageWrapper>
            )}
        </>
    );
};

export default SelectionControl;
