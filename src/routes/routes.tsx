import React from 'react';

import MainPage from '../pages/MainPage/MainPage';
import CompletedPage from '../pages/CompletedPage/CompletedPage';
import InsuranceInfo from '../pages/InsuranceInfo/InsuranceInfo';

import Layout1 from '../layouts/Layout1/Layout1';

type RouteType = {
    path: string;
    component: React.FC;
    layout?: React.FC<React.ReactNode> | null;
}

const routes: RouteType[] = [
    { path: '/', component: MainPage, layout: null },
    { path: "/insurance_info", component: InsuranceInfo, layout: Layout1 },
    { path: "/completed", component: CompletedPage, layout: null }
];

export default routes;
