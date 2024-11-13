import * as React from 'react';
import BasicInfo from './BasicInfo';
import InsuranceInfo from './InsuranceInfo';
import PaymentInfo from './PaymentInfo';
import CoverageInfos from './CoverageInfos';
import fees from '../../utils/models/Fee';

type PanelType = {
    title: string;
    content: React.ReactNode;
    span?: string;
};

const panels: PanelType[] = [
    {
        title: '기본 정보',
        content: <BasicInfo />,
    },
    {
        title: '피보험자 정보',
        content: <InsuranceInfo />,
    },
    {
        title: '보장내용 및 유의사항',
        content: <CoverageInfos />,
    },
    {
        title: '결제 정보',
        span: `(${fees.total.toLocaleString()}원)`,
        content: <PaymentInfo />,
    },
];

export default function InsuranceDetailsAccordion() {
    return (
        <div
            className="accordion type-sp w-wide"
            data-role="accordion-wrap"
            data-accordion-type="multiple"
        >
            {panels.map((panel, index) => (
                <div
                    className="accordion-item"
                    data-role="accordion-item"
                    key={index}
                >
                    <a
                        href="#"
                        className="accordion-title"
                        data-role="accordion-title"
                    >
                        <em>{panel.title}</em>
                        <span className="sub-text">{panel.span}</span>
                    </a>
                    <div
                        className="accordion-content bg-wh"
                        data-role="accordion-content"
                    >
                        {panel.content}
                    </div>
                </div>
            ))}
        </div>
    );
}
