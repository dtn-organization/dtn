import {rgba} from "polished";

export const phi = 1.61803398875;

export const boxShadow = (p: any) => {
    return `box-shadow: 0 ${phi / 20}rem ${phi / 12}rem ${rgba(color.dark, 0.15)};`
};

export const radius = {
    tiny: '5px',
    small: '15px',
    medium: '40px',
    high: '50%',
};

export const color = {
    dark: '#000000',
    light: '#ffffff',

    red: '#f44336',
    pink: '#e91e63',
    purple: '#9c27b0',
    deepPurple: '#673ab7',
    indigo: '#3f51b5',
    blue: '#2196f3',
    lightBlue: '#03a9f4',
    cyan: '#00bcd4',
    teal: '#009688',
    green: '#4caf50',
    lightGreen: '#8bc34a',
    lime: '#cddc39',
    yellow: '#ffeb3b',
    amber: '#ffc107',
    orange: '#ff9800',
    deepOrange: '#ff5722',
    brown: '#795548',
    grey: '#9e9e9e',
    blueGrey: '#607d8b'
};

export const transition = '0.3s linear';