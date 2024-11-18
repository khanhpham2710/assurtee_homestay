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
import HeaderBack from '../components/Headers/HeaderBack';
import EmailPage from '../pages/EmailPage/EmailPage';
import TermCondition from '../pages/TermCondition/TermCondition';
import HeaderNull from '../components/Headers/HeaderNull';
import HomeHeader from '../components/Headers/HomeHeader';
import NewFillAllInfor from '../pages/FilledAllInfor/NewFillAllInfor';
import HeaderClose from '../components/Headers/HeaderClose';
import FilledBossInfor from '../pages/FilledBossInfor/FilledBossInfor';

type RouteType = {
    path: string;
    component: React.FC;
    header: React.ReactNode;
    fixedItem?: React.FC;
};

const routes: RouteType[] = [
    {
        path: 'personal-infor',
        component: FilledPersonalInfor,
        header: <HomeHeader />,
    },
    {
        path: 'boss-infor',
        component: FilledBossInfor,
        header: (
            <HeaderClose
                title="미스터멘션 공유숙박업 등록증"
                backTo="/personal-infor"
            />
        ),
    },
    {
        path: 'insurance-infor',
        component: InsuranceInfo,
        header: <HomeHeader />,
    },
    {
        path: 'options',
        component: ScanOption,
        header: <HeaderBack title="주택 정보 입력" backTo="/" />,
    },
    {
        path: 'business-infor',
        component: FilledBusinessInfor,
        header: <HeaderBack title="주택 정보 입력" backTo="/options" />,
    },
    {
        path: 'all-infor',
        component: NewFillAllInfor,
        header: (
            <HeaderClose title="가입 내용 수정" backTo="/insurance-infor" />
        ),
    },
    {
        path: 'terms',
        component: TermCondition,
        header: (
            <HeaderBack title="전자서명 동의 안내" backTo="/insurance-amount" />
        ),
    },
    {
        path: 'insurance-amount',
        component: InsuranceAmount,
        header: <HomeHeader />,
    },
    {
        path: 'payment',
        component: Payment,
        header: <HeaderBack title="결제" backTo="/insurance-infor" />,
    },
    {
        path: 'inprogress',
        component: LoadingPage,
        header: <HeaderNull />,
    },
    {
        path: 'complete',
        component: CompletedPage,
        header: <HomeHeader />,
    },
    {
        path: 'detail/:isSuccess',
        component: InsuranceDetailsPage,
        header: <HeaderBack title="보험가입내역" backTo="/complete" />,
    },
    {
        path: 'EmailPage',
        component: EmailPage,
        header: null,
    },
];

export default routes;
