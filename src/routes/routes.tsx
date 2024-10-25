import React from 'react';

// components
import HomePage from '../pages/HomePage/HomePage';
import CompletedPage from '../pages/CompletedPage/CompletedPage';
import InsuranceInfo from '../pages/InsuranceInfo/InsuranceInfo';
import ScanOption from '../pages/ScanOption/ScanOption';
import FilledPersonalInfor from '../pages/FilledPersonalInfor/FilledPersonalInfor';
import FilledBusinessInfor from '../pages/FilledBusinessInfor/FilledBusinessInfor';
import SearchAddress from '../pages/SearchAddress/SearchAddress';

// headers
import Header1 from '../components/Headers/Header1';
import Header2 from '../components/Headers/Header2';
import InsuranceAmount from '../pages/InsuranceAmount/InsuranceAmount';

type RouteType = {
    path: string;
    component: React.FC;
    header: React.ReactNode | null;
};

const routes: RouteType[] = [
    { path: '/', component: HomePage, header: null },

    { path: '/insurance-info', component: InsuranceInfo, header: <Header1 /> },

    { path: '/completed', component: CompletedPage, header: <Header1 /> },

    {
        path: '/scan-option',
        component: ScanOption,
        header: <Header2 title="주택 정보 입력" backTo="/" />,
    },

    {
        path: '/personal-infor',
        component: FilledPersonalInfor,
        header: <Header1 />,
    },

    {
        path: '/business-infor',
        component: FilledBusinessInfor,
        header: <Header2 title="주택 정보 입력" backTo="/scan-option" />,
    },
    {
        path: '/search-address',
        component: SearchAddress,
        header: null,
    },
    {
        path: '/insurance-amount',
        component: InsuranceAmount,
        header: <Header1 />,
    },
];

export default routes;
