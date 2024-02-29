import { extendTheme } from 'native-base';

export const Temas = extendTheme({
    colors: {
        gray: {
            300: '#8D8D99'
        },
        blue: {
            500: '#85C4FF',
            800: '#0B3B60'
        },
        white: '#fff',
        black: '#000'
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
})