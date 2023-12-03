import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(response => {
    // @ts-ignore
    setTimeout(() => response(import('./MainPage')), 1500)
}));