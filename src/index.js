// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button

/**
 * Components
 */
import HQPricingCard from './components/pricing/HQPricingCard';

// helpers
import { colors, ThemeProvider, ThemeConsumer, withTheme } from './config';
import getIconType, { registerCustomIconType } from './helpers/getIconType';
import normalize from './helpers/normalizeText';

export {
    HQPricingCard,
    colors,
    getIconType,
    registerCustomIconType,
    normalize,
    ThemeProvider,
    ThemeConsumer,
    withTheme,
};
