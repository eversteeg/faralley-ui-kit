/* eslint-disable @typescript-eslint/triple-slash-reference, max-len, spaced-comment, typescript-sort-keys/interface */
/// <reference path="../@types/react-table.d.ts" />
export enum AdornmentPosition {
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

export enum Alignment {
    CENTER = 'CENTER',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
}

export enum ButtonSize {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
}

export enum ButtonVariant {
    FILLED = 'FILLED',
    OUTLINE = 'OUTLINE',
    TEXT_ONLY = 'TEXT_ONLY',
}

export enum Currencies {
    EUR = 'EUR',
    GBP = 'GBP',
    KZT = 'KZT',
    RUB = 'RUB',
    USD = 'USD',
}

export enum DialogSize {
    DEFAULT = 'DEFAULT',
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
}

export enum Direction {
    LTR = 'LTR',
    RTL = 'RTL',
}

export enum Easing {
    EASE = 'ease',
    EASE_IN = 'ease-in',
    EASE_IN_OUT = 'ease-in-out',
    EASE_OUT = 'ease-out',
    LINEAR = 'linear',
    NONE = 'none',
}

export enum EditableDataComponent {
    CHECKBOX = 'Checkbox',
    DATEPICKER = 'DatePicker',
    DROPDOWN = 'Dropdown',
    DROPDOWNMULTISELECT = 'DropdownMultiSelect',
    DROPDOWNSELECT = 'DropdownSelect',
    IMMUTABLE = 'Immutable',
    INPUT = 'Input',
    INPUTCOLOR = 'InputColor',
    INPUTCURRENCY = 'InputCurrency',
    INPUTNUMBER = 'InputNumber',
    SCOREPICKER = 'ScorePicker',
    TEXTAREA = 'Textarea',
    TIMEPICKER = 'TimePicker',
}

/* eslint-disable typescript-sort-keys/string-enum */
export enum Elevation {
    LEVEL_0 = 'LEVEL_0',
    LEVEL_1 = 'LEVEL_1',
    LEVEL_2 = 'LEVEL_2',
    LEVEL_3 = 'LEVEL_3',
    LEVEL_4 = 'LEVEL_4',
    LEVEL_6 = 'LEVEL_6',
    LEVEL_8 = 'LEVEL_8',
    LEVEL_12 = 'LEVEL_12',
    LEVEL_16 = 'LEVEL_16',
    LEVEL_24 = 'LEVEL_24',
}
/* eslint-enable typescript-sort-keys/string-enum */

// Since we don't want to include selection.json in our distribution bundle we came up with the following solution:
// If the contents of selection.json ever change just run `npm run build:iconTypes` and replace the enum with
// the output from the console.
export enum IconType {
    ADJUSTMENT = 'ADJUSTMENT',
    ADVERTISEMENT = 'ADVERTISEMENT',
    ARROWDOWN = 'ARROWDOWN',
    ARROWLEFT = 'ARROWLEFT',
    ARROWLEFTUP = 'ARROWLEFTUP',
    ARROWRIGHT = 'ARROWRIGHT',
    ARROWRIGHTUP = 'ARROWRIGHTUP',
    ARROWUP = 'ARROWUP',
    AWARD = 'AWARD',
    BACKSPACE = 'BACKSPACE',
    BALL_BASKETBALL = 'BALL_BASKETBALL',
    BALL_BASKETBALL_3P = 'BALL_BASKETBALL_3P',
    BALL_BASKETBALL_FG = 'BALL_BASKETBALL_FG',
    BALL_BASKETBALL_FT = 'BALL_BASKETBALL_FT',
    BALL_BASKETBALL_RATIO = 'BALL_BASKETBALL_RATIO',
    BALL_HOCKEY = 'BALL_HOCKEY',
    BALL_HOCKEY_RATIO = 'BALL_HOCKEY_RATIO',
    BALL_SOCCER = 'BALL_SOCCER',
    BALL_SOCCER_RATIO = 'BALL_SOCCER_RATIO',
    BEACH = 'BEACH',
    BELLOFF = 'BELLOFF',
    BELLON = 'BELLON',
    BENCH = 'BENCH',
    CABLE = 'CABLE',
    CALENDAR = 'CALENDAR',
    CALENDARACCEPT = 'CALENDARACCEPT',
    CALENDARCHECK = 'CALENDARCHECK',
    CALENDARCROSS = 'CALENDARCROSS',
    CALENDARDECLINE = 'CALENDARDECLINE',
    CALENDARSYNC = 'CALENDARSYNC',
    CALENDARTRASH = 'CALENDARTRASH',
    CAMERA = 'CAMERA',
    CAMERAPLUS = 'CAMERAPLUS',
    CAPTAIN = 'CAPTAIN',
    CAPTAIN_FILLED = 'CAPTAIN_FILLED',
    CAR = 'CAR',
    CARDS = 'CARDS',
    CARLIFT = 'CARLIFT',
    CHANGE = 'CHANGE',
    CHANGE_REVERSE = 'CHANGE_REVERSE',
    CHART = 'CHART',
    CHECK = 'CHECK',
    CHECKBOXCHECK = 'CHECKBOXCHECK',
    CHECKBOXMINUS1 = 'CHECKBOXMINUS1',
    CHECKDOUBLE = 'CHECKDOUBLE',
    CHEVRONDOWN = 'CHEVRONDOWN',
    CHEVRONFIRST = 'CHEVRONFIRST',
    CHEVRONLAST = 'CHEVRONLAST',
    CHEVRONLEFT = 'CHEVRONLEFT',
    CHEVRONRIGHT = 'CHEVRONRIGHT',
    CHEVRONUP = 'CHEVRONUP',
    CLIPBOARD = 'CLIPBOARD',
    CLIPBOARDCHECK = 'CLIPBOARDCHECK',
    CLIPBOARDQUESTION = 'CLIPBOARDQUESTION',
    CLOCK = 'CLOCK',
    CLUBMINUS = 'CLUBMINUS',
    CLUBMULTIPLE = 'CLUBMULTIPLE',
    CLUBPLACEHOLDER09 = 'CLUBPLACEHOLDER09',
    CLUBPLACEHOLDER1 = 'CLUBPLACEHOLDER1',
    CLUBPLACEHOLDER10 = 'CLUBPLACEHOLDER10',
    CLUBPLACEHOLDER11 = 'CLUBPLACEHOLDER11',
    CLUBPLACEHOLDER12 = 'CLUBPLACEHOLDER12',
    CLUBPLACEHOLDER13 = 'CLUBPLACEHOLDER13',
    CLUBPLACEHOLDER14 = 'CLUBPLACEHOLDER14',
    CLUBPLACEHOLDER15 = 'CLUBPLACEHOLDER15',
    CLUBPLACEHOLDER16 = 'CLUBPLACEHOLDER16',
    CLUBPLACEHOLDER2 = 'CLUBPLACEHOLDER2',
    CLUBPLACEHOLDER3 = 'CLUBPLACEHOLDER3',
    CLUBPLACEHOLDER4 = 'CLUBPLACEHOLDER4',
    CLUBPLACEHOLDER5 = 'CLUBPLACEHOLDER5',
    CLUBPLACEHOLDER6 = 'CLUBPLACEHOLDER6',
    CLUBPLACEHOLDER7 = 'CLUBPLACEHOLDER7',
    CLUBPLACEHOLDER8 = 'CLUBPLACEHOLDER8',
    CLUBPLUS = 'CLUBPLUS',
    CLUBUNKNOWN = 'CLUBUNKNOWN',
    CODE = 'CODE',
    COFFEE = 'COFFEE',
    COMMUNICATIONMAIL = 'COMMUNICATIONMAIL',
    COMMUNICATIONPHONE = 'COMMUNICATIONPHONE',
    CONE = 'CONE',
    CONTRIBUTION = 'CONTRIBUTION',
    COPY = 'COPY',
    CROSS = 'CROSS',
    CURRENCY_CN = 'CURRENCY_CN',
    CURRENCY_EU = 'CURRENCY_EU',
    CURRENCY_IN = 'CURRENCY_IN',
    CURRENCY_JP = 'CURRENCY_JP',
    CURRENCY_KR = 'CURRENCY_KR',
    CURRENCY_KZ = 'CURRENCY_KZ',
    CURRENCY_NL = 'CURRENCY_NL',
    CURRENCY_RU = 'CURRENCY_RU',
    CURRENCY_SA = 'CURRENCY_SA',
    CURRENCY_UK = 'CURRENCY_UK',
    CURRENCY_US = 'CURRENCY_US',
    DANGER = 'DANGER',
    DIAMOND = 'DIAMOND',
    DROPDOWN = 'DROPDOWN',
    DROPLEFT = 'DROPLEFT',
    DROPRIGHT = 'DROPRIGHT',
    DROPUP = 'DROPUP',
    EVENT_CARDROUND = 'EVENT_CARDROUND',
    EVENT_CARDSQUARE = 'EVENT_CARDSQUARE',
    EVENT_CARDTRIANGLE = 'EVENT_CARDTRIANGLE',
    EVENT_FAULT = 'EVENT_FAULT',
    EVENT_GENERIC = 'EVENT_GENERIC',
    EVENT_REDCARD = 'EVENT_REDCARD',
    EVENT_YELLOWCARD = 'EVENT_YELLOWCARD',
    FENCE = 'FENCE',
    FIELDSOCCER = 'FIELDSOCCER',
    FILEAUDIO = 'FILEAUDIO',
    FILECOMPRESSED = 'FILECOMPRESSED',
    FILEDEV = 'FILEDEV',
    FILEDOCUMENT = 'FILEDOCUMENT',
    FILEDOWNLOAD = 'FILEDOWNLOAD',
    FILEGENERIC = 'FILEGENERIC',
    FILEIMAGE = 'FILEIMAGE',
    FILEMAIL = 'FILEMAIL',
    FILEMINUS = 'FILEMINUS',
    FILEPLUS = 'FILEPLUS',
    FILEPRESENTATION = 'FILEPRESENTATION',
    FILETABLE = 'FILETABLE',
    FILETRASH = 'FILETRASH',
    FILEVIDEO = 'FILEVIDEO',
    FLAG = 'FLAG',
    FLAME = 'FLAME',
    FOLDERGENERIC = 'FOLDERGENERIC',
    FOLDERMINUS = 'FOLDERMINUS',
    FOLDEROPEN = 'FOLDEROPEN',
    FOLDERPLUS = 'FOLDERPLUS',
    FOLDERSEARCH = 'FOLDERSEARCH',
    FOLDERTRASH = 'FOLDERTRASH',
    GEAR = 'GEAR',
    GENDERFEMALE = 'GENDERFEMALE',
    GENDERMALE = 'GENDERMALE',
    GENDERMIXED = 'GENDERMIXED',
    HAND2FINGERS = 'HAND2FINGERS',
    HANDSNAP = 'HANDSNAP',
    HANGER = 'HANGER',
    HASH = 'HASH',
    HEART = 'HEART',
    HELPDESK = 'HELPDESK',
    HOME = 'HOME',
    IDCARD = 'IDCARD',
    INDICATOR = 'INDICATOR',
    KEYBOARD = 'KEYBOARD',
    LETTERICON_A = 'LETTERICON_A',
    LETTERICON_B = 'LETTERICON_B',
    LETTERICON_C = 'LETTERICON_C',
    LETTERICON_D = 'LETTERICON_D',
    LETTERICON_E = 'LETTERICON_E',
    LETTERICON_F = 'LETTERICON_F',
    LETTERICON_G = 'LETTERICON_G',
    LETTERICON_H = 'LETTERICON_H',
    LETTERICON_I = 'LETTERICON_I',
    LETTERICON_J = 'LETTERICON_J',
    LETTERICON_K = 'LETTERICON_K',
    LETTERICON_L = 'LETTERICON_L',
    LETTERICON_M = 'LETTERICON_M',
    LETTERICON_N = 'LETTERICON_N',
    LETTERICON_O = 'LETTERICON_O',
    LETTERICON_P = 'LETTERICON_P',
    LETTERICON_Q = 'LETTERICON_Q',
    LETTERICON_R = 'LETTERICON_R',
    LETTERICON_S = 'LETTERICON_S',
    LETTERICON_T = 'LETTERICON_T',
    LETTERICON_U = 'LETTERICON_U',
    LETTERICON_V = 'LETTERICON_V',
    LETTERICON_W = 'LETTERICON_W',
    LETTERICON_X = 'LETTERICON_X',
    LETTERICON_Y = 'LETTERICON_Y',
    LETTERICON_Z = 'LETTERICON_Z',
    LIGHTBULB = 'LIGHTBULB',
    LIGHTPOLE = 'LIGHTPOLE',
    LINK = 'LINK',
    LINKMINUS = 'LINKMINUS',
    LINKPLUS = 'LINKPLUS',
    LOCATION = 'LOCATION',
    LOCKOFF = 'LOCKOFF',
    LOCKON = 'LOCKON',
    LOGOUT = 'LOGOUT',
    MATCHCUP = 'MATCHCUP',
    MEDIA_PAUSE = 'MEDIA_PAUSE',
    MEDIA_PLAY = 'MEDIA_PLAY',
    MEDIA_SKIP = 'MEDIA_SKIP',
    MEDIA_STOP = 'MEDIA_STOP',
    MENU = 'MENU',
    MESSAGE = 'MESSAGE',
    MINUS = 'MINUS',
    MONEY = 'MONEY',
    MOVEALL = 'MOVEALL',
    MOVELEFTRIGHT = 'MOVELEFTRIGHT',
    MOVEUPDOWN = 'MOVEUPDOWN',
    NEWS = 'NEWS',
    NOTEBOOK = 'NOTEBOOK',
    NUMBERICON_0 = 'NUMBERICON_0',
    NUMBERICON_1 = 'NUMBERICON_1',
    NUMBERICON_2 = 'NUMBERICON_2',
    NUMBERICON_3 = 'NUMBERICON_3',
    NUMBERICON_4 = 'NUMBERICON_4',
    NUMBERICON_5 = 'NUMBERICON_5',
    NUMBERICON_6 = 'NUMBERICON_6',
    NUMBERICON_7 = 'NUMBERICON_7',
    NUMBERICON_8 = 'NUMBERICON_8',
    NUMBERICON_9 = 'NUMBERICON_9',
    OFFICE = 'OFFICE',
    OFFICIALSHIRT = 'OFFICIALSHIRT',
    OPTIONS = 'OPTIONS',
    PACKAGE = 'PACKAGE',
    PASSES = 'PASSES',
    PASSPLUS = 'PASSPLUS',
    PENCIL = 'PENCIL',
    PENCILCROSS = 'PENCILCROSS',
    PERCENTAGE = 'PERCENTAGE',
    PLACEHOLDER = 'PLACEHOLDER',
    PLANE = 'PLANE',
    PLATFORM = 'PLATFORM',
    PLUS = 'PLUS',
    POSTBOXIN = 'POSTBOXIN',
    POSTBOXOUT = 'POSTBOXOUT',
    PUZZLEPIECE = 'PUZZLEPIECE',
    QUESTION = 'QUESTION',
    QUESTIONMARK = 'QUESTIONMARK',
    REDO = 'REDO',
    ROOF = 'ROOF',
    ROUNDALERT_FILLED = 'ROUNDALERT_FILLED',
    ROUNDCHECK_FILLED = 'ROUNDCHECK_FILLED',
    ROUNDCROSS_FILLED = 'ROUNDCROSS_FILLED',
    ROUNDEURO_DASHED = 'ROUNDEURO_DASHED',
    ROUNDMINUS_FILLED = 'ROUNDMINUS_FILLED',
    ROUNDPLUS_FILLED = 'ROUNDPLUS_FILLED',
    ROUND_ALERT = 'ROUND_ALERT',
    ROUND_ALERT_DASHED = 'ROUND_ALERT_DASHED',
    ROUND_ARROWDOWN = 'ROUND_ARROWDOWN',
    ROUND_ARROWDOWN_DASHED = 'ROUND_ARROWDOWN_DASHED',
    ROUND_ARROWLEFT = 'ROUND_ARROWLEFT',
    ROUND_ARROWLEFT_DASHED = 'ROUND_ARROWLEFT_DASHED',
    ROUND_ARROWRIGHT = 'ROUND_ARROWRIGHT',
    ROUND_ARROWRIGHT_DASHED = 'ROUND_ARROWRIGHT_DASHED',
    ROUND_ARROWUP = 'ROUND_ARROWUP',
    ROUND_ARROWUP_DASHED = 'ROUND_ARROWUP_DASHED',
    ROUND_CHECK = 'ROUND_CHECK',
    ROUND_CHECK_DASHED = 'ROUND_CHECK_DASHED',
    ROUND_CROSS = 'ROUND_CROSS',
    ROUND_CROSS_DASHED = 'ROUND_CROSS_DASHED',
    ROUND_EURO = 'ROUND_EURO',
    ROUND_EURODISABLED = 'ROUND_EURODISABLED',
    ROUND_HELP = 'ROUND_HELP',
    ROUND_INFO = 'ROUND_INFO',
    ROUND_MINUS = 'ROUND_MINUS',
    ROUND_MINUS_DASHED = 'ROUND_MINUS_DASHED',
    ROUND_NONE = 'ROUND_NONE',
    ROUND_PAUSE = 'ROUND_PAUSE',
    ROUND_PAUSE_DASHED = 'ROUND_PAUSE_DASHED',
    ROUND_PERSON = 'ROUND_PERSON',
    ROUND_PLUS = 'ROUND_PLUS',
    ROUND_PLUS_DASHED = 'ROUND_PLUS_DASHED',
    ROUND_STAR = 'ROUND_STAR',
    SCISSORS = 'SCISSORS',
    SCOREBOARD = 'SCOREBOARD',
    SEARCH = 'SEARCH',
    SELECT = 'SELECT',
    SHARE = 'SHARE',
    SHIELD = 'SHIELD',
    SHIRT = 'SHIRT',
    SLSHIELD = 'SLSHIELD',
    SMARTPHONE = 'SMARTPHONE',
    SMILEY_BAD = 'SMILEY_BAD',
    SMILEY_GOOD = 'SMILEY_GOOD',
    SMILEY_HAPPY = 'SMILEY_HAPPY',
    SMILEY_NEUTRAL = 'SMILEY_NEUTRAL',
    SMILEY_POOR = 'SMILEY_POOR',
    SORT_ALPHA = 'SORT_ALPHA',
    SORT_STATUS = 'SORT_STATUS',
    SPARKLE = 'SPARKLE',
    SPORTATLETIEK = 'SPORTATLETIEK',
    SPORTBASKETBAL = 'SPORTBASKETBAL',
    SPORTHANDBAL = 'SPORTHANDBAL',
    SPORTHOCKEY = 'SPORTHOCKEY',
    SPORTHONKBAL = 'SPORTHONKBAL',
    SPORTJUDO = 'SPORTJUDO',
    SPORTKORFBAL = 'SPORTKORFBAL',
    SPORTKRACHT = 'SPORTKRACHT',
    SPORTREDDINGSBRIGADE = 'SPORTREDDINGSBRIGADE',
    SPORTVOETBAL = 'SPORTVOETBAL',
    SPORTVOLLEYBAL = 'SPORTVOLLEYBAL',
    SPORTZWEMMEN = 'SPORTZWEMMEN',
    SQUARE_PLUS = 'SQUARE_PLUS',
    STAREMPTY = 'STAREMPTY',
    STARFULL = 'STARFULL',
    STARHALF = 'STARHALF',
    SUBSTITUTE = 'SUBSTITUTE',
    SUBSTITUTE_HORIZONTAL = 'SUBSTITUTE_HORIZONTAL',
    SUN = 'SUN',
    SUPPORT = 'SUPPORT',
    TIMER = 'TIMER',
    TRANSIT = 'TRANSIT',
    TRASHCAN = 'TRASHCAN',
    TRASHCANAUTO = 'TRASHCANAUTO',
    TUTORIAL = 'TUTORIAL',
    TV = 'TV',
    TWIST = 'TWIST',
    TWITTER = 'TWITTER',
    TWITTERPLUS = 'TWITTERPLUS',
    UNDO = 'UNDO',
    USER = 'USER',
    USERCROSS = 'USERCROSS',
    USERDOUBLE = 'USERDOUBLE',
    USERDOUBLECROSS = 'USERDOUBLECROSS',
    USERDOUBLEMINUS = 'USERDOUBLEMINUS',
    USERDOUBLEPLUS = 'USERDOUBLEPLUS',
    USERMINUS = 'USERMINUS',
    USERPLUS = 'USERPLUS',
    VIDEOCAMERA = 'VIDEOCAMERA',
    VISIBILITYOFF = 'VISIBILITYOFF',
    VISIBILITYON = 'VISIBILITYON',
    WALKBIKE = 'WALKBIKE',
    WATER = 'WATER',
    WEBSITE = 'WEBSITE',
    WHISTLE = 'WHISTLE',
    WORLD = 'WORLD',
}

export enum IconSize {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    XLARGE = 'XLARGE',
    XSMALL = 'XSMALL',
}

export enum InputType {
    COLOR = 'color',
    CURRENCY = 'currency',
    EMAIL = 'email',
    NUMBER = 'number',
    PASSWORD = 'password',
    TELEPHONE = 'telephone',
    TEXT = 'text',
    URI = 'uri',
}

export enum InputVariant {
    COMPACT = 'COMPACT',
    OUTLINE = 'OUTLINE',
}

export enum Layout {
    HORIZONTAL = 'HORIZONTAL',
    VERTICAL = 'VERTICAL',
}

export enum Locale {
    BE = 'BE',
    DE = 'DE',
    EN = 'EN',
    FR = 'FR',
    GB = 'GB',
    KZ = 'KZ',
    NL = 'NL',
    RU = 'RU',
    UK = 'UK',
    US = 'US',
}

export enum ModalSize {
    FULL = 'FULL',
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    XLARGE = 'XLARGE',
}

export enum Placement {
    BOTTOM = 'BOTTOM',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TOP = 'TOP',
}

export enum Position {
    BOTTOM_CENTER = 'BOTTOM_CENTER',
    BOTTOM_LEFT = 'BOTTOM_LEFT',
    BOTTOM_RIGHT = 'BOTTOM_RIGHT',
    MIDDLE_CENTER = 'MIDDLE_CENTER',
    MIDDLE_LEFT = 'MIDDLE_LEFT',
    MIDDLE_RIGHT = 'MIDDLE_RIGHT',
    TOP_CENTER = 'TOP_CENTER',
    TOP_LEFT = 'TOP_LEFT',
    TOP_RIGHT = 'TOP_RIGHT',
}

export enum SelectionControlSize {
    DEFAULT = 'DEFAULT',
    SMALL = 'SMALL',
}

export enum SelectionControlGroupVariant {
    COMPACT = 'COMPACT',
    OUTLINE = 'OUTLINE',
    OUTLINE_CHOICE = 'OUTLINE_CHOICE',
}

export enum SidePanelSize {
    FULL = 'FULL',
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    XLARGE = 'XLARGE',
}

export enum Size {
    LARGE = 'LARGE',
    MEDIUM = 'MEDIUM',
    SMALL = 'SMALL',
    XLARGE = 'XLARGE',
}

export enum Status {
    ALERT = 'ALERT',
    DATA_ERROR = 'DATA_ERROR',
    DEFAULT = 'DEFAULT',
    DISABLED = 'DISABLED',
    INVALID = 'INVALID',
    NONE = 'NONE',
    TIP = 'TIP',
    VALID = 'VALID',
}

export enum StatusIndicatorSize {
    LARGE = 'LARGE',
    NONE = 'NONE', // Weird but necessary for multi select table variant
    SMALL = 'SMALL',
}

export interface OptionObject {
    isDisabled?: boolean;
    label: string;
    value: string | number;
}

export interface Theme {
    shades: {
        one: string;
        two: string;
        three: string;
        four: string;
        five: string;
        six: string;
        seven: string;
        eight: string;
        nine: string;
    };
    colorPrimary: string;
    colorSecondary: string;
    colorTertiary: string;
    colorAlert: string;
    colorDisabled: string;
    colorInvalid: string;
    colorValid: string;
    fontFamilyPrimary: string;
    fontFamilySecondary: string;
    colorTextContrast: {
        primary: string;
    };
    colorText: {
        primary: string;
        secondary: string;
    };
    colorTextBody: {
        primary: string;
        secondary: string;
    };
    background: {
        primary: string;
        secondary: string;
        tertiary: string;
    };
    button: {
        filled: {
            backgroundColor: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                loader: string;
                loaderInverted: string;
                primary: string;
            };
            color: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                primary: string;
            };
        };
        outline: {
            backgroundColor: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                loader: string;
                loaderInverted: string;
                primary: string;
            };
            color: {
                disabled: string;
                hover: string;
                hoverInverted: string;
                inverted: string;
                primary: string;
            };
        };
        textOnly: {
            disabled: string;
            disabledInverted: string;
            hover: string;
            hoverInverted: string;
            inverted: string;
            loader: string;
            loaderInverted: string;
            primary: string;
        };
    };
    card: {
        backgroundColor: string;
    };
    datePicker: {
        backgroundColor: string;
        color: string;
        day: {
            accent: string;
            backgroundColor: string;
            color: string;
            disabled: {
                backgroundColor: string;
                color: string;
            };
            hover: {
                accent: string;
                backgroundColor: string;
                color: string;
            };
            selected: {
                backgroundColor: string;
                color: string;
            };
            selectionLimit: {
                backgroundColor: string;
                color: string;
            };
        };
    };
    header: {
        backgroundColor: {
            primary: string;
            secondary: string;
        };
    };
    hover: {
        backgroundColor: string;
    };
    loader: {
        primary: string;
        secondary: string;
    };
    overlay: {
        backgroundColor: string;
    };
    table: {
        footer: {
            backgroundColor: string;
        };
        row: {
            backgroundColorEven: string;
            backgroundColorOdd: string;
            borderColorRowSelector: string;
            borderColorRowSelectorDisabled: string;
        };
    };
    textStyles: {
        body1: ThemeTextStyle;
        body2: ThemeTextStyle;
        buttonLarge: ThemeTextStyle;
        buttonMedium: ThemeTextStyle;
        buttonSmall: ThemeTextStyle;
        caption: ThemeTextStyle;
        caption2: ThemeTextStyle;
        h1: ThemeTextStyle;
        h2: ThemeTextStyle;
        h3: ThemeTextStyle;
    };
    spacingValue: number;
    availableTextStyles: () => ThemeTextStylesMap;
    spacing: (factor1: number, factor2?: number, factor3?: number, factor4?: number) => string;
    textStyling: (textStyleSelector: keyof Theme['textStyles']) => string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}

export interface ThemeTextStyle {
    fontFamily: string;
    fontSize: string;
    fontWeight: string;
    lineHeight: string;
}

export type ThemeTextStylesMap = {
    [TextStyle in keyof Theme['textStyles']]: TextStyle;
};

export enum zIndex {
    DIALOG = 10000, // Uses 3 layers down
    MODAL = 9996, // Uses 2 layers down. Needs at least -3 from DIALOG, because DIALOG uses 3 layers
    OVERLAY = 10,
    SIDEPANEL = 9997, // It's possible to have a sidepanel in a modal, so this needs to be at least +1 to modal
    TABLEROW = 2,
    TOOLTIP = 99999999,
}
