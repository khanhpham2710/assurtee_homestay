import React from 'react';

// components
import MainPage from '../pages/MainPage/MainPage';
import CompletedPage from '../pages/CompletedPage/CompletedPage';
import InsuranceInfo from '../pages/InsuranceInfo/InsuranceInfo';

// headers
import Header1 from '../components/Headers/Header1/Header1';
import HeaderMain from '../components/Headers/HeaderMain/HeaderMain';

type RouteType = {
    path: string;
    component: React.FC;
    header: React.FC;
};

const routes: RouteType[] = [
    { path: '/', component: MainPage, header: HeaderMain },

    { path: '/insurance_info', component: InsuranceInfo, header: Header1 },

    { path: '/completed', component: CompletedPage, header: Header1 },
];

export default routes;
