import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                roboto: ['Roboto', 'sans-serif'],
            },

            colors: {
                white: '#ffffff',
                red: '#d92a1f',
                blue: '#5abae5',
                purple: {
                    dark: '#373f75',
                    light: '#4c5494',
                }
            }
        },
    },

    plugins: [forms],
};
