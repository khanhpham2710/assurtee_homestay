import { useSelector } from 'react-redux';
import GreyLabelInfoBox, { InfoProps } from '../InfoBox/GreyLabelInfoBox';
import { RootState } from '../../utils/redux/store';
import { useMemo } from 'react';
import { InfoType } from '../../utils/models/InfoType';
import { formatDate } from '../../utils/validation/startAndEndDate';

function RegistrationInfo() {
    const state: InfoType = useSelector((state: RootState) => state.info);

    const { formatedStartDate, formatedEndDate } = useMemo(
        () => formatDate(new Date(state.startDate)),
        [state.startDate, state.endDate]
    );

    const infos: InfoProps[] = [
        {
            title: '상호',
            info: state.businessName,
        },
        {
            title: '등록번호',
            info: state.businessNumber,
        },
        {
            title: '가입 대상 소재지',
            info: state.address,
        },
        {
            title: '보험시작일',
            info: `${formatedStartDate} / 00시 00분'`,
        },
        {
            title: '보험종료일',
            info: `${formatedEndDate} / 00시 00분'`,
        },
        {
            title: '화재보험',
            info: state.fireInsurance,
        },
        {
            title: '영업배상책임보험',
            info: `${state.area}m²`,
        },
    ];

    return (
        <div className="form-wrap">
            <div className="form-list">
                <strong className="form-title">가입정보</strong>
                {infos.map((info, index) => {
                    return (
                        <GreyLabelInfoBox
                            key={index}
                            title={info.title}
                            info={info.info}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default RegistrationInfo;
