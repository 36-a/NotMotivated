import { addons } from '@storybook/manager-api';
import MyTheme from './nm';

addons.setConfig({
    toolbar: {
        // 'storybook/background': { hidden: true },
    },
    theme: MyTheme,
});
