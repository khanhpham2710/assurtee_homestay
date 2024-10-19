import React from 'react';
import MainPage from '../pages/MainPage/MainPage';

interface RouteType {
    path: string;
    component: React.ComponentType;
    layout?: React.ComponentType<unknown> | null;
}

const routes: RouteType[] = [{ path: '/', component: MainPage, layout: null }];

export default routes;
