import React from 'react';

// components
import MainPage from '../pages/MainPage/MainPage';
import CompletedPage from '../pages/CompletedPage/CompletedPage';
import InsuranceInfo from '../pages/InsuranceInfo/InsuranceInfo';

// layouts
import Layout1 from '../layouts/Layout1/Layout1';

type RouteType = {
    path: string;
    component: React.FC;
    layout?: React.FC | null;
}

const routes: RouteType[] = [
    { path: '/', component: MainPage, layout: null },
    { path: "/insurance_info", component: InsuranceInfo, layout: Layout1 },
    { path: "/completed", component: CompletedPage, layout: null }
];

export default routes;
