import { Box } from '@mui/material';
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import React from 'react';

const fontStyle: SxProps<Theme> = {
    fontFamily: 'AppleSDGothicNeoB',
    fontSize: 14,
    lineHeight: 1.25,
    textAlign: 'left',
    fontStretch: 'normal',
    color: '#646464',
    '& a': {
        color: '#0068e2',
        textDecoration: 'none',
    },
};

const NoteContent: React.JSX.Element = (
    <Box sx={fontStyle}>
        <p>
            롯데손해보험과 ㈜어슈어티는 해당 보험 약관에 의하여 보험계약을
            체결하였습니다. 보험계약 체결 전 상품설명서 및 약관을 반드시
            읽어보시기 바랍니다.
        </p>
        <br />
        <ul>
            <li>
                - 이 증명서는 보험가입사실을 확인하는 용도로만 사용가능하며,
                실제 계약내용은 보험증권 및 약관을 확인해주세요. - 지급한도 및
                면책사항 등에 따라 보험금 지급이 제한될 수 있습니다.
            </li>
            <li>
                - 기존 보험계약을 해지하고 새로운 보험계약을 체결하는 경우,
                보험인수가 거절되거나 보험료가 인상될 수 있으며 보장내용
                (면책기간 재적용 등)이 달라질 수 있습니다.
            </li>
            <li>
                - 이 보험 상품은 순수보장성 상품으로 만기환급금은 발생하지
                않습니다.
            </li>
            <li>
                - 보장 내용별 자기부담금 상세내용은 약관을 참고하시기 바랍니다.
            </li>
            <li> 만15세 미만은 사망담보가 포함되지 않습니다.</li>
            <li>
                - 해외여행 중 배상책임특별약관, 해외여행중 휴대품손해
                특별약관(분실제외), 기본형 해외여행 실손의료보험특별약관
                (해외상해의료비, 상해급여의료비(국내치료), 해외질병의료비,
                질병급여의료비(국내치료)), 비급여 해외여행 실손의료보험특별약관
                (상해비급여의료비(국내치료), 질병비급여의료비(국내치료),
                3대비급여) 의료비(비급여 도수치료 · 체외충격파치료 ·
                증식치료의료비(국내치료), 비급여 주사료(국내치료), 비급여
                자기공명영상진단(MRI/MRA)(국내치료)) 등의 경우 보험금을 지급할
                다수계약(공제 계약 포함)이 체결되어 있으면 약관에서 정한 바에
                따라 가입금액 한도 내에서 실손 비례보상합니다.
            </li>
            <br />
            <li>
                - 보험관련문의는 어슈어티 고객센터로 문의해주시고, 사고관련
                문의는 롯데손해보험 고객센터로 문의해주시기 바랍니다.
            </li>
        </ul>
        <br />
        <p>
            어슈어티 고객센터{' '}
            <span>
                <a href="tel:1533-1291">1533-1291</a>
            </span>
        </p>
        <br />
        <p>
            롯데손해보험 보상문의{' '}
            <span>
                <a href="tel:1588-3344">1588-3344</a>
            </span>
        </p>
    </Box>
);

export default NoteContent;
