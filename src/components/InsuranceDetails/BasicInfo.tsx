import GreyLabelInfoBox, { InfoProps } from '../InfoBox/GreyLabelInfoBox';
import { useAppSelector } from '../../utils/hooks/reduxHooks';
import { formatDate, formatTime } from '../../utils/validation/startAndEndDate';
import { useMemo } from 'react';

function BasicInfo() {
    const info = useAppSelector((state) => state.info);

    const { formatedStartDate, formatedEndDate } = useMemo(
        () => formatDate(info.startDate),
        []
    );

    const infos: InfoProps[] = [
        {
            title: '가입일시',
            info: formatTime(new Date()),
        },
        {
            title: '가입번호',
            info: 'C20240412151614526',
        },
        {
            title: '보험시작일',
            info: `${formatedStartDate} / 00시 00분`,
        },
        {
            title: '보험종료일',
            info: `${formatedEndDate} / 00시 00분`,
        },
        {
            title: '납입 보험료',
            info: '19,300원',
        },
        {
            title: '계약자',
            info: 'FALI20240605565',
        },
    ];
    return (
        <>
            {infos?.map((info, index) => {
                return (
                    <GreyLabelInfoBox
                        title={info.title}
                        info={info.info}
                        key={index}
                    />
                );
            })}
        </>
    );
}

export default BasicInfo;
