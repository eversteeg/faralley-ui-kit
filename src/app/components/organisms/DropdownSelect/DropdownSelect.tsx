import { Elevation, IconType, InputType, InputVariant } from '../../../types';
import { IconCustomizable, IconCustomizableSize } from '../../molecules/IconCustomizable';
import { LabelWrapper, StyledDropdownSelect, SuggestionList } from './DropdownSelect.sc';
import React, { ChangeEvent, ReactNode, SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { DialogFooter } from '../../molecules/DialogFooter/DialogFooter';
import { DropdownOption } from '../../molecules/Dropdown/Dropdown';
import { Input } from '../../molecules/Input/Input';
import { List } from '../../molecules/List/List';
import { ListItem } from '../../atoms/ListItem/ListItem';
import { toBasicLowercase } from '../../../utils/functions/stringFunctions';
import { useClickOutsideComponent } from '../../../utils/functions/clickHandlers';

export interface DropdownSelectOption extends DropdownOption {
    adornment?: ReactNode;
    searchValue?: string;
}

interface UpdatedDropdownSelectOption extends DropdownSelectOption {
    searchValue: string;
}

export interface DropdownSelectProps<T extends DropdownSelectOption> {
    autoFocus?: boolean;
    children?: never;
    className?: string;
    defaultValue?: string;
    elevation?: Elevation;
    errorMessage?: ReactNode;
    footerText?: ReactNode;
    hasError?: boolean;
    iconType: IconType;
    isDisabled?: boolean;
    isRequired?: boolean;
    isSearchAny?: boolean;
    isValid?: boolean;
    label?: ReactNode;
    maxHeight?: number;
    name: string;
    noResultsMessage: string;
    onChange?: (option: T) => void;
    onConfirm?: (event: SyntheticEvent, option: T) => void;
    optionLabel: ReactNode;
    options: T[];
    value: string;
    variant?: InputVariant;
}

export const DropdownSelect = <T extends DropdownSelectOption>({
    autoFocus = false,
    className,
    defaultValue,
    elevation = Elevation.LEVEL_6,
    errorMessage,
    hasError = false,
    iconType,
    footerText,
    isDisabled = false,
    isRequired = false,
    isSearchAny = false,
    isValid = false,
    label,
    maxHeight,
    name,
    noResultsMessage,
    onChange,
    onConfirm,
    options,
    optionLabel,
    value,
    variant,
}: DropdownSelectProps<T>): JSX.Element => {
    const [inputValue, setInputValue] = useState(value);
    const [isOptionSelected, setIsOptionSelected] = useState(false);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [suggestedOptions, setSuggestedOptions] = useState<T[]>([]);
    const [updatedOptions, setUpdatedOptions] = useState<T[]>([]);

    useEffect(() => {
        if (value.length) {
            setIsOptionSelected(true);
        }
    }, []);

    const handleOnChange = (newOption: T) => {
        if (onChange) {
            onChange({
                ...newOption,
                label: newOption.label || inputValue,
                value: newOption.value || inputValue,
            } as T);
        }
    };

    useEffect(() => {
        setUpdatedOptions(
            options.map(
                (option) =>
                    ({
                        ...option,
                        searchValue: option.searchValue
                            ? toBasicLowercase(option.searchValue)
                            : toBasicLowercase(option.label),
                    } as T)
            )
        );
    }, [options]);

    const onChangeCallback = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            if (event.currentTarget) {
                setIsOptionSelected(false);
                const newOptionValue = event.currentTarget.value;
                setInputValue(newOptionValue);

                handleOnChange({
                    label: newOptionValue,
                    value: defaultValue || newOptionValue,
                } as T);
            }
        },
        [inputValue, onChange, options]
    );

    const onSelectOptionCallback = useCallback(
        (event: SyntheticEvent, option?: T) => {
            event.persist();

            const selectedOption =
                option ||
                ({
                    label: inputValue,
                    value: defaultValue || inputValue,
                } as T);

            setIsOptionSelected(true);
            setInputValue(selectedOption.label);
            handleOnChange(selectedOption);

            if (onConfirm) {
                onConfirm(event, selectedOption);
            }

            setIsSelectOpen(false);
        },
        [defaultValue, inputValue, onConfirm]
    );

    useEffect(() => {
        setIsSelectOpen(!isOptionSelected && inputValue.length > 0);
    }, [inputValue, isOptionSelected]);

    useEffect(() => {
        setSuggestedOptions(
            updatedOptions.filter((option) =>
                isSearchAny
                    ? (option as UpdatedDropdownSelectOption).searchValue.includes(toBasicLowercase(inputValue))
                    : (option as UpdatedDropdownSelectOption).searchValue.indexOf(toBasicLowercase(inputValue)) === 0
            )
        );
    }, [inputValue, updatedOptions]);

    const handleClickOutsideComponent = (): void => {
        setIsSelectOpen(false);
    };

    const { componentRef } = useClickOutsideComponent(() => handleClickOutsideComponent());

    const onFocusCallback = useCallback((): void => {
        setIsSelectOpen(inputValue.length > 0);
    }, [inputValue]);

    const onKeyDownCallback = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>): void => {
            if (event.key === 'Enter') {
                onSelectOptionCallback(event, {
                    label: inputValue,
                    value: defaultValue || inputValue,
                } as T);
            }
        },
        [defaultValue, inputValue]
    );

    return (
        <StyledDropdownSelect className={className} ref={componentRef}>
            <Input
                autoFocus={autoFocus}
                errorMessage={errorMessage}
                hasError={hasError}
                isDisabled={isDisabled}
                isRequired={isRequired}
                isValid={isValid}
                label={label}
                name={name}
                onChange={onChangeCallback}
                onFocus={onFocusCallback}
                onKeyDown={onKeyDownCallback}
                type={InputType.TEXT}
                value={inputValue}
                variant={variant}
            />

            {isSelectOpen && (
                <SuggestionList elevation={elevation}>
                    <List maxHeight={maxHeight}>
                        {suggestedOptions.length < 1 && (
                            <ListItem
                                adornment={
                                    <IconCustomizable
                                        iconSize={IconCustomizableSize.SIZE24}
                                        iconType={IconType.SEARCH}
                                    />
                                }
                                isLighter
                            >
                                <LabelWrapper>{noResultsMessage}</LabelWrapper>
                            </ListItem>
                        )}
                        {suggestedOptions.map((item) => (
                            <ListItem
                                adornment={item.adornment}
                                isDisabled={isDisabled}
                                key={item.value}
                                onClick={(event: React.MouseEvent<Element, MouseEvent>): void => {
                                    onSelectOptionCallback(event, item);
                                }}
                            >
                                <LabelWrapper>{item.label}</LabelWrapper>
                            </ListItem>
                        ))}
                        <ListItem
                            adornment={<IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={iconType} />}
                            onClick={(event: React.MouseEvent<Element, MouseEvent>): void => {
                                onSelectOptionCallback(event);
                            }}
                        >
                            <LabelWrapper>{optionLabel}</LabelWrapper>
                        </ListItem>
                    </List>
                    <DialogFooter text={footerText} />
                </SuggestionList>
            )}
        </StyledDropdownSelect>
    );
};

export default DropdownSelect;
