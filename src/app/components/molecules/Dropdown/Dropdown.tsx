import { IconType, OptionObject } from '../../../types';
import { IconWrapper, Select, StyledDropdown } from './Dropdown.sc';
import React, {
    ChangeEvent,
    ComponentType,
    FunctionComponent,
    MouseEventHandler,
    ReactNode,
    useMemo,
    useState,
} from 'react';
import { DropdownVariant } from './types';
import ErrorMessage from '../../atoms/ErrorMessage/ErrorMessage';
import FormElementLabel from '../FormElementLabel/FormElementLabel';
import { IconCustomizable } from '../IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../IconCustomizable/types';
import SelectOption from '../../atoms/SelectOption/SelectOption';

export interface DropdownOption extends OptionObject {}

export interface DropdownProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    as?: keyof JSX.IntrinsicElements | ComponentType<any>;
    autoFocus?: boolean;
    children?: ReactNode;
    className?: string;
    errormessage?: ReactNode;
    hasError?: boolean;
    isDisabled?: boolean;
    isOpen?: boolean;
    isRequired?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    name: string;
    noOptionsText?: string;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    onClick?: MouseEventHandler;
    options?: DropdownOption[];
    placeholder?: string;
    value: number | string;
    variant?: DropdownVariant;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Dropdown: FunctionComponent<DropdownProps & { [key: string]: any }> = ({
    as = 'select',
    autoFocus = false,
    children,
    className,
    errorMessage,
    hasError = false,
    isDisabled = false,
    isOpen = false,
    isRequired = false,
    isValid = false,
    label,
    name,
    noOptionsText,
    onChange,
    onClick,
    options,
    placeholder,
    value,
    variant = DropdownVariant.COMPACT,
    ...rest
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const isEmpty = useMemo(() => options && options.length === 0, [options]);
    const placeholderText = !isEmpty ? placeholder : noOptionsText || placeholder;

    return (
        <>
            <StyledDropdown
                className={className}
                hasError={hasError}
                isDisabled={isDisabled}
                isFocused={isFocused || isOpen}
                isValid={isValid}
                variant={variant}
                {...rest}
            >
                {label && (
                    <FormElementLabel
                        hasError={hasError}
                        isActive
                        isDisabled={isDisabled}
                        isFocused={isFocused || isOpen}
                        isHovered={isHovered}
                        isRequired={isRequired}
                        isValid={isValid}
                    >
                        {label}
                    </FormElementLabel>
                )}
                <Select
                    as={as}
                    autoFocus={autoFocus}
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isEmpty={isEmpty}
                    isFocused={isFocused || isOpen}
                    isHovered={isHovered}
                    isPlaceholderSelected={placeholder === value || isEmpty}
                    isValid={isValid}
                    name={name}
                    onBlur={(): void => {
                        setIsFocused(false);
                    }}
                    onChange={onChange}
                    onClick={!isEmpty ? onClick : undefined}
                    onFocus={(): void => {
                        setIsFocused(true);
                    }}
                    onMouseEnter={(): void => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={(): void => {
                        setIsHovered(false);
                    }}
                    required={isRequired}
                    value={value}
                    variant={variant}
                >
                    {as === 'select' && placeholderText && (
                        <>
                            <SelectOption isDisabled isHidden value={placeholderText}>
                                {placeholderText}
                            </SelectOption>
                            {isEmpty && (
                                <SelectOption key={'dummy'} value={placeholderText}>
                                    {placeholderText}
                                </SelectOption>
                            )}
                        </>
                    )}

                    {options &&
                        !isEmpty &&
                        options.map((option) => (
                            <SelectOption key={`option-${option.value}`} value={option.value}>
                                {option.label}
                            </SelectOption>
                        ))}
                    {children}
                </Select>
                <IconWrapper
                    hasError={hasError}
                    isDisabled={isDisabled}
                    isFocused={isFocused || isOpen}
                    isHovered={isHovered}
                    isValid={isValid}
                    variant={variant}
                >
                    <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.DROPDOWN} />
                </IconWrapper>
            </StyledDropdown>
            {errorMessage && hasError && !isDisabled && (
                <ErrorMessage isOutlineVariant={variant === DropdownVariant.OUTLINE}>{errorMessage}</ErrorMessage>
            )}
        </>
    );
};

export default Dropdown;
