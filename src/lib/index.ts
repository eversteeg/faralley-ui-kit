/* eslint-disable sort-imports */
// The sort-imports ESLint rule is disabled in this file so we can group the import by folder
// Import the CSS
import '../app/styles/fonts/cuprum/cuprum.css';
import '../app/styles/fonts/exo2/exo2.css';
import '../app/styles/fonts/firasanscondensed/firasanscondensed.css';
import '../app/styles/fonts/iconfont/iconfont.css';
import '../app/styles/fonts/opensans/opensans.css';

// Export common types
export * from '../app/types';

// Export theming
export { themeBasic, themeBasicDefinition } from '../app/styles/theming/themes/basic';
export { themeCyrillic } from '../app/styles/theming/themes/cyrillic';
export { themeCyrillicDark } from '../app/styles/theming/themes/cyrillicdark';
export { themeDark } from '../app/styles/theming/themes/dark';
export { createDuiTheme } from '../app/styles/theming/createDuiTheme';

// Export mixins
export { getAlignment } from '../app/styles/mixins/getAlignment';
export { getBorderColor } from '../app/styles/mixins/getBorderColor';
export { getElevation } from '../app/styles/mixins/getElevation';
export { getPosition } from '../app/styles/mixins/getPosition';
export { getStatusColor } from '../app/styles/mixins/getStatusColor';
export { getStatusIndicator } from '../app/styles/mixins/getStatusIndicator';
export { rippleEffect, rippleEffectInit, rippleEffectReset } from '../app/styles/mixins/rippleEffect';
export { setBoxSizing } from '../app/styles/mixins/setBoxSizing';
export { setCentered } from '../app/styles/mixins/setCentered';
export { setTruncate } from '../app/styles/mixins/setTruncate';
export { fadeInEffect, slideUpEffect, transitionEffect } from '../app/styles/mixins/transitionEffects';

// Export functions
export {
    areAllOptionsSelected,
    getDropdownSelectOption,
    getOptionLabel,
    getSelectedElements,
    getSelectedText,
    isAnyOptionSelected,
    picklistMultiSelectFacade,
    removeElement,
    selectOptionsExtend,
    selectOptionsFacade,
    setElementSelected,
} from '../app/utils/functions/arrayObjectFunctions';
export { convertToValidURIValue } from '../app/utils/functions/linkFunctions';
export {
    toBasicLowercase,
    capitalizeFirstLetter,
    capitalizeFirstLetters,
} from '../app/utils/functions/stringFunctions';
export { cloneArray } from '../app/utils/functions/arrayFunctions';
export { convertLocale, isDotDecimalCountry } from '../app/utils/functions/localeFunctions';
export { createTable } from '../app/utils/functions/createTable';
export {
    compareDates,
    currentDate,
    isValidClockTime,
    isValidDate,
    isValidStringDate,
    formatAsSystemDate,
    formatDate,
    formatTime,
    isDateBetween,
    isFutureDate,
    toDate,
    toMoment,
} from '../app/utils/functions/dateFunctions';
export { hexToRgb, invertColor } from '../app/utils/functions/colorFunctions';
export { sum } from '../app/components/organisms/Table/utils/aggregateFunctions';
export {
    isEmpty,
    isObject,
    isValidEmail,
    isValidIBAN,
    isValidMoney,
    isValidNumber,
    isValidPhoneNumber,
    isValidURI,
    modulo,
} from '../app/utils/functions/validateFunctions';
export { areEqualObjects, getObjectDifference, isObjectPropertyChanged } from '../app/utils/functions/objectFunctions';
export {
    convertToLocaleValue,
    defaultCurrencySettings,
    formatMoney,
    formatMoneyWithoutSymbol,
    getCurrencySymbol,
    getCurrencyType,
    toCents,
    toMoney,
    toMoneyValue,
} from '../app/utils/functions/financialFunctions';
export {
    base64ToBlob,
    blobToObjectUrl,
    getFileFormats,
    getFileNames,
    getFileSizes,
    getFileType,
    getFileTypes,
    getTotalSizeFiles,
    openBinary,
    OpenBinaryProps,
    openUrl,
} from '../app/utils/functions/fileFunctions';
export {
    parseClocktimeToTimePickerValue,
    parseMomentToTimePickerValue,
    parseTimePickerValueToClocktime,
} from '../app/utils/functions/timePickerFunctions';
export {
    compareValues,
    customSortByBoolean,
    customSortByDate,
    customSortByCaseInsensitive,
    getColumnWidthByPercentage,
    getSelectedRowIds,
    getSelectedRows,
    renderSortIcon,
} from '../app/components/organisms/Table/utils/tableFunctions';
export { toBoolean } from '../app/utils/functions/toBoolean';
export { toNumber } from '../app/utils/functions/toNumber';
export { toString } from '../app/utils/functions/toString';
export { useInterval } from '../app/utils/functions/timerFunctions';

// Export atoms
export { Card, CardProps } from '../app/components/atoms/Card/Card';
export { ErrorMessage, ErrorMessageProps } from '../app/components/atoms/ErrorMessage/ErrorMessage';
export { Icon, IconProps } from '../app/components/atoms/Icon/Icon';
export { Label, LabelProps } from '../app/components/atoms/Label/Label';
export { Link, LinkProps, NativeLinkProps, RouterLinkProps } from '../app/components/atoms/Link/Link';
export { SelectOption, SelectOptionProps } from '../app/components/atoms/SelectOption/SelectOption';
export { StatusIndicator, StatusIndicatorProps } from '../app/components/atoms/StatusIndicator/StatusIndicator';

// Export molecules
export { Button, ButtonProps } from '../app/components/molecules/Button/Button';
export { ButtonIcon, ButtonIconProps } from '../app/components/molecules/ButtonIcon/ButtonIcon';
export { CardNoResults, CardNoResultsProps } from '../app/components/molecules/CardNoResults/CardNoResults';
export { CardStatus, CardStatusProps } from '../app/components/molecules/CardStatus/CardStatus';
export { Chip, ChipProps } from '../app/components/molecules/Chip/Chip';
export { CloseablePanel, CloseablePanelProps } from '../app/components/molecules/CloseablePanel/CloseablePanel';
export { DialogFooter, DialogFooterProps } from '../app/components/molecules/DialogFooter/DialogFooter';
export { Dropdown, DropdownOption, DropdownProps, DropdownVariant } from '../app/components/molecules/Dropdown';
export { FormElementLabel, FormElementLabelProps } from '../app/components/molecules/FormElementLabel/FormElementLabel';
export {
    FullscreenLoader,
    FullscreenLoaderProps,
    FullscreenLoaderType,
} from '../app/components/molecules/FullscreenLoader';
export { Header, HeaderProps } from '../app/components/molecules/Header/Header';
export {
    IconCustomizable,
    IconCustomizableProps,
    IconCustomizableSize,
} from '../app/components/molecules/IconCustomizable';
export { Input, InputProps } from '../app/components/molecules/Input/Input';
export { Loader, LoaderProps } from '../app/components/molecules/Loader/Loader';
export { Overlay, OverlayProps } from '../app/components/molecules/Overlay/Overlay';
export { PanelHeader, PanelHeaderProps } from '../app/components/molecules/PanelHeader/PanelHeader';
export { PanelStatus, PanelStatusProps } from '../app/components/molecules/PanelStatus/PanelStatus';
export { ProgressBar } from '../app/components/molecules/ProgressBar/ProgressBar';
export { ScorePicker, ScorePickerProps } from '../app/components/molecules/ScorePicker/ScorePicker';
export {
    SelectionControl,
    SelectionControlProps,
    SelectionControlType,
} from '../app/components/molecules/SelectionControl';
export {
    SelectionControlGroup,
    SelectionControlGroupProps,
} from '../app/components/molecules/SelectionControlGroup/SelectionControlGroup';
export { Skeleton, SkeletonProps } from '../app/components/molecules/Skeleton/Skeleton';
export { TextIcon, TextIconProps } from '../app/components/molecules/TextIcon/TextIcon';
export {
    TextWithOptionalIcon,
    TextWithOptionalIconProps,
} from '../app/components/molecules/TextWithOptionalIcon/TextWithOptionalIcon';
export { TimePicker, TimePickerProps } from '../app/components/molecules/TimePicker/TimePicker';
export { Tooltip, TooltipProps } from '../app/components/molecules/Tooltip/Tooltip';

// Export organisms
export { ChipInfo, ChipInfoProps } from '../app/components/organisms/ChipInfo';
export { ChipStatus, ChipStatusProps, ChipStatusVariant } from '../app/components/organisms/ChipStatus';
export { ContentCell, ContentCellProps } from '../app/components/organisms/Table/ContentCell/ContentCell';
export {
    DateRangePicker,
    DateRangePickerProps,
    SingleDatePicker,
    SingleDatePickerProps,
    SingleDatePickerVariant,
} from '../app/components/organisms/DatePicker';
export { Dialog, DialogButtonClosePosition, DialogProps, IconPlacement } from '../app/components/organisms/Dialog';
export {
    DropdownMultiSelect,
    DropdownMultiSelectOption,
    DropdownMultiSelectProps,
    DropdownOptionAllTexts,
} from '../app/components/organisms/DropdownMultiSelect';
export {
    DropdownSelect,
    DropdownSelectProps,
    DropdownSelectOption,
} from '../app/components/organisms/DropdownSelect/DropdownSelect';
export {
    EditableInformation,
    EditableInformationProps,
    EditableInformationDataType,
    ValueTypes,
    EditableInformationData,
    isValidEditableInput,
} from '../app/components/organisms/EditableInformation';
export { ConfirmDialog, EditablePanel, EditablePanelProps } from '../app/components/organisms/EditablePanel';
export { FileUploader, FileUploaderProps, FileAlertType, FileTypes } from '../app/components/organisms/FileUploader';
export { FileUploadDialog, FileUploadDialogProps } from '../app/components/organisms/FileUploadDialog/FileUploadDialog';
export {
    AmountOfColumns,
    InformationTable,
    InformationTableData,
    InformationTableProps,
} from '../app/components/organisms/InformationTable';
export { InputPassword, InputPasswordProps } from '../app/components/organisms/InputPassword/InputPassword';
export { InputColor, InputColorProps } from '../app/components/organisms/InputColor/InputColor';
export { InputCurrency, InputCurrencyProps } from '../app/components/organisms/InputCurrency/InputCurrency';
export { Menu, MenuProps } from '../app/components/organisms/Menu/Menu';
export { Modal, ModalProps } from '../app/components/organisms/Modal/Modal';
export {
    PicklistMultiSelect,
    PicklistMultiSelectOption,
    PicklistMultiSelectProps,
    PicklistMultiSelectPanelProps,
} from '../app/components/organisms/PicklistMultiSelect/PicklistMultiSelect';
export { Paginator, PaginatorProps, PaginatorTexts } from '../app/components/organisms/Table/Paginator/Paginator';
export { SidePanel, SidePanelProps } from '../app/components/organisms/SidePanel/SidePanel';
export { StatusCell, StatusCellProps } from '../app/components/organisms/Table/StatusCell/StatusCell';
export { Table, TableProps, TableTexts } from '../app/components/organisms/Table/Table';
export { TableSkeleton, TableSkeletonProps } from '../app/components/organisms/Table/TableSkeleton/TableSkeleton';
export { ToggleCheckbox, ToggleCheckboxProps } from '../app/components/organisms/ToggleCheckbox/ToggleCheckbox';
export { Tab, Tabs, TabsProps, TabHeaders, TabPanel } from '../app/components/organisms/Tabs';
export { Toolbar, ToolbarProps } from '../app/components/organisms/Toolbar/Toolbar';
