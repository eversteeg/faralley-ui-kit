import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Easing } from '../../types';

export const transitionEffect = ({
    duration = 400,
    delay = 0,
    easing = Easing.EASE,
    property = 'all',
} = {}): FlattenSimpleInterpolation => css`
    transition: ${`${property} ${duration}ms ${easing} ${delay}ms`};
`;

export const slideUpEffect = ({
    duration = 500,
    easing = Easing.EASE,
    isVisible = false,
    property = 'all',
} = {}): FlattenSimpleInterpolation => css`
    ${transitionEffect({
        duration,
        easing,
        property,
    })}
    transform: ${`translate3d(-50%, ${isVisible ? '0' : '100%'}, 0)`};
`;

export const fadeInEffect = ({
    duration = 500,
    easing = Easing.EASE,
    isVisible = false,
    property = 'all',
} = {}): FlattenSimpleInterpolation => css`
    ${transitionEffect({
        duration,
        easing,
        property,
    })}
    transform: ${`translate3d(-50%, ${isVisible ? '-50%' : '-40%'}, 0)`};
`;
