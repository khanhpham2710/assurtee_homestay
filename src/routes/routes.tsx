import React from 'react';

// components
import CompletedPage from '../pages/CompletedPage/CompletedPage';
import InsuranceInfo from '../pages/InsuranceInfo/InsuranceInfo';
import ScanOption from '../pages/ScanOption/ScanOption';
import FilledInfor from '../pages/FilledInfor/FilledInfor';
import HomePage from '../pages/HomePage/HomePage';
// headers
import Header1 from '../components/Headers/Header1';
import Header2 from '../components/Headers/Header2';
import HeaderMain from '../components/Headers/HeaderMain';

type RouteType = {
    path: string;
    component: React.FC;
    header: React.ReactNode | null;
};

const routes: RouteType[] = [
    { path: '/insurance_info', component: InsuranceInfo, header: <Header1 /> },

    { path: '/completed', component: CompletedPage, header: <Header1 /> },

    {
        path: '/scan-option',
        component: ScanOption,
        header: <Header2 title="주택 정보 입력" />,
    },

    { path: '/filled-infor', component: FilledInfor, header: <Header1 /> },

    {
        path: "/", component: HomePage, header: null
    }
];

export default routes;
