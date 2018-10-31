// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button

/**
 * Components
 */
import PricingCard from './pricing/PricingCard';

// helpers
import { colors, ThemeProvider, ThemeConsumer, withTheme } from './config';
import getIconType, { registerCustomIconType } from './helpers/getIconType';
import normalize from './helpers/normalizeText';

export {
    PricingCard,
    colors,
    getIconType,
    registerCustomIconType,
    normalize,
    ThemeProvider,
    ThemeConsumer,
    withTheme,
};
