/* eslint-disable object-property-newline */
import React, { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import BE from '../locale/moment/BE';
import DE from '../locale/moment/DE';
import EN from '../locale/moment/EN';
import FR from '../locale/moment/FR';
import GB from '../locale/moment/GB';
import KZ from '../locale/moment/KZ';
import { Locale } from '../types';
import moment from 'moment';
import NL from '../locale/moment/NL';
import RU from '../locale/moment/RU';
import UK from '../locale/moment/UK';
import US from '../locale/moment/US';

interface ConfigContextType {
    configuration: ConfigType;
    setConfiguration: (configuration: ConfigType) => void;
    updateLocale: (language: Locale) => void;
}

interface ConfigType {
    locale: Locale;
}

export const ConfigContext = createContext<ConfigContextType>({} as ConfigContextType);

export const useConfigContext = (): ConfigContextType => {
    const context = useContext(ConfigContext);

    if (context === undefined) {
        throw new Error('useConfigContext was used outside of its Provider');
    }

    return context;
};

export const ConfigProvider = ({ children }: { children: ReactNode }): JSX.Element => {
    const [configuration, setConfiguration] = useState<ConfigType>({
        locale: Locale.EN,
    });

    const updateLocale = (language: Locale) => {
        switch (language) {
            case Locale.BE:
                moment.updateLocale(Locale.BE, BE);
                break;

            case Locale.DE:
                moment.updateLocale(Locale.DE, DE);
                break;

            case Locale.FR:
                moment.updateLocale(Locale.FR, FR);
                break;

            case Locale.GB:
                moment.updateLocale(Locale.GB, GB);
                break;

            case Locale.KZ:
                moment.updateLocale(Locale.KZ, KZ);
                break;

            case Locale.NL:
                moment.updateLocale(Locale.NL, NL);
                break;

            case Locale.RU:
                moment.updateLocale(Locale.RU, RU);
                break;

            case Locale.UK:
                moment.updateLocale(Locale.UK, UK);
                break;

            case Locale.US:
                moment.updateLocale(Locale.US, US);
                break;

            default:
                moment.updateLocale(Locale.EN, EN);
        }

        setConfiguration({ ...configuration, locale: language });
    };

    const memoizedValue = useMemo(
        () => ({ configuration, setConfiguration, updateLocale }),
        [configuration, setConfiguration, updateLocale]
    );

    return <ConfigContext.Provider value={memoizedValue}>{children}</ConfigContext.Provider>;
};
