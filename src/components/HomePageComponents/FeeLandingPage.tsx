import MyToolTip from '../MyTooltip/MyToolTip';

type ItemType = {
    label: string;
    value: string;
};

type InsuranceDetail = {
    title: string;
    main: ItemType;
    items: ItemType[];
};

const details: InsuranceDetail[] = [
    {
        title: '화재보험',
        main: { label: '보험료', value: '9,300 원' },
        items: [
            { label: '가입금액', value: '1억원' },
            { label: '건물', value: '3,000만원' },
            { label: '시설 및 집기', value: '3,000만원' },
            { label: '재고자산', value: '3,000만원' },
        ],
    },
    {
        title: '영업배상책임보험',
        main: { label: '보험료', value: '10,000 원' },
        items: [
            { label: '형태', value: '단독' },
            { label: '공급면적', value: '79m²' },
        ],
    },
];

export default function FeeLandingPage() {
    return (
        <div className="sample-list">
            {details &&
                details?.map((detail, index) => {
                    return (
                        <div key={index} className="info-list">
                            <strong className="form-title">
                                {detail.title}
                            </strong>

                            <div className="row row--large">
                                <div className="inner">
                                    <div className="box-tit">
                                        {detail.main.label}
                                    </div>

                                    <div className="box-cont">
                                        {detail.main.value}
                                    </div>
                                </div>
                            </div>

                            {detail?.items.map((item, index) => {
                                return (
                                    <div key={index} className="row">
                                        <div className="inner">
                                            <div className="box-tit">
                                                {item.label}
                                            </div>

                                            <div className="box-cont">
                                                {item.value}
                                                <MyToolTip />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
        </div>
    );
}
