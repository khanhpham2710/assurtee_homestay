import React from 'react';

// page imports
import CompletedPage from '../pages/CompletedPage/CompletedPage';
import InsuranceInfo from '../pages/InsuranceInfo/InsuranceInfo';
import ScanOption from '../pages/TwoOptions/TwoOptions';
import FilledPersonalInfor from '../pages/FilledPersonalInfor/FilledPersonalInfor';
import FilledBusinessInfor from '../pages/FilledBusinessInfor/FilledBusinessInfor';
import Payment from '../pages/Payment/Payment';
import InsuranceAmount from '../pages/FilledInsuranceAmount/FilledInsuranceAmount';
import LoadingPage from '../pages/Loading/Loading';
import InsuranceDetailsPage from '../pages/InsuranceDetailsPage/InsuranceDetailsPage';

// header imports
import Header2 from '../components/Headers/Header2';
import EmailPage from '../pages/EmailPage/EmailPage';
import TermCondition from '../pages/TermCondition/TermCondition';
import HeaderNull from '../components/Headers/HeaderNull';
import HomeHeader from '../components/Headers/HomeHeader';

type RouteType = {
    path: string;
    component: React.FC;
    header: React.ReactNode;
    fixedItem?: React.FC;
};

const routes: RouteType[] = [
    {
        path: '/personal-infor',
        component: FilledPersonalInfor,
        header: <HomeHeader />,
    },
    {
        path: '/insurance-infor',
        component: InsuranceInfo,
        header: <HomeHeader />,
    },
    {
        path: '/options',
        component: ScanOption,
        header: <Header2 title="주택 정보 입력" backTo="/" />,
    },
    {
        path: '/business-infor',
        component: FilledBusinessInfor,
        header: <Header2 title="주택 정보 입력" backTo="/options" />,
    },
    {
        path: '/terms',
        component: TermCondition,
        header: (
            <Header2 title="전자서명 동의 안내" backTo="/insurance-amount" />
        ),
    },
    {
        path: '/insurance-amount',
        component: InsuranceAmount,
        header: <HomeHeader />,
    },
    {
        path: '/payment',
        component: Payment,
        header: <Header2 title="결제" backTo="/insurance-infor" />,
    },
    {
        path: '/inprogress',
        component: LoadingPage,
        header: <HeaderNull />,
    },
    {
        path: '/complete',
        component: CompletedPage,
        header: <HomeHeader />,
    },
    {
        path: '/detail/:isSuccess',
        component: InsuranceDetailsPage,
        header: <Header2 title="보험가입내역" backTo="/complete" />,
    },
    {
        path: '/EmailPage',
        component: EmailPage,
        header: null,
    },
];

export default routes;
