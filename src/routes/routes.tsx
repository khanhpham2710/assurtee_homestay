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
import Header1 from '../components/Headers/Header1';
import Header2 from '../components/Headers/Header2';
import EmailPage from '../pages/EmailPage/EmailPage';
import TermCondition from '../pages/TermCondition/TermCondition';
import FilledPersonalBusinessInfor from '../pages/FilledPersonalBusinessInfor/FilledPersonalBusinessInfor';
import HeaderNull from '../components/Headers/HeaderNull';

type RouteType = {
    path: string;
    component: React.FC;
    header: React.ReactNode;
};

const routes: RouteType[] = [
    {
        path: '/personal-infor',
        component: FilledPersonalInfor,
        header: <Header1 />,
    },
    {
        path: '/insurance-infor',
        component: InsuranceInfo,
        header: <Header1 />,
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
        path: '/personal-business-infor',
        component: FilledPersonalBusinessInfor,
        header: <Header1 />,
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
        header: <Header1 />,
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
        header: <Header1 />,
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
