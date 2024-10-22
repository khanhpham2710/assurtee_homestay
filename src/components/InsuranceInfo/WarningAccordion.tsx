import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function WarningAccordion() {
    return (
        <Accordion id='warning_accordion'>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                    height: '50px',
                    border: 'solid 1px #e0e0e0',
                    backgroundColor: '#fff',
                    paddingX: '24px'
                }}
            >
                <h3 className='heading'>
                    보험가입 전 유의사항
                </h3>
            </AccordionSummary>
            <AccordionDetails sx={{
                padding: '17px 24px 22px',
                border: 'solid 1px #e0e0e0',
                backgroundColor: '#faf9f9'
            }}>
                <p>1. 유의사항: 국내치료 실손의료비 지급액 및 공제금액</p>
                <br />
                <p>- 급여 실손의료비</p>
                <p>
                    상해급여의료비와 질병급여의료비는 입원·통원 합산 연간
                    보험가입금액 한도로 지급합니다.
                </p>
                <ul>
                    <li>▶ 입원: 의료급여 중 본인부담금의 80% 해당액</li>
                    <li>
                        ▶ 통원: 통원 1회당 의료급여 중 본인부담금에서 '통원항목별
                        공제금액'을 뺀 금액
                    </li>
                </ul>
                <p>
                    주) 통원항목별 공제금액 1) 보장대상 의료비의 20%(최소2만원)
                    : 전문요양기관, 상급종합병원, 종합병원에서의 외래 등 2)
                    보장대상 의료비의 20%(최소1만원) : ‘1)’ 이외의 경우{' '}
                </p>
                <br />
                <p>- 비급여 실손의료비</p>
                <p>
                    상해비급여의료비와 질병비급여의료비는 입원·통원 합산 연간
                    보험가입금액 한도로(단, 통원은 회당 보험가입금액, 연간 100회
                    한도) 아래와 같이 지급합니다.
                </p>
                <ul>
                    <li>
                        ▶ 입원: 비급여 의료비의 70% 해당액 - 상급병실료 차액:
                        비급여 병실료의 50% (1일 평균 금액 10만원 한도)
                    </li>
                    <li>
                        ▶ 통원: 통원 1회당(외래 및 처방조제비 합산) 비급여
                        의료비(비급여 병실료 제외) 중 ‘항목별 공제금액)’을 뺀
                        금액(단, 100회 한도) 주) 통원항목별 공제금액: 보장대상
                        의료비의 30%(최소 3만원)
                    </li>
                </ul>
                <br />
                <p>- 3대 비급여 의료비</p>
                <p>
                    비급여 도수치료 · 체외충격파치료 · 증식치료의료비, 비급여
                    주사료, 비급여 자기공명영상진단 (MRI/MRA)의료비는 각각
                    아래와 같은 기준에 의하여 지급됨
                </p>
                <br />
                <p>- 비급여 도수치료 · 체외충격파치료 · 증식치료의료비 </p>

                <ul>
                    <li>
                        ▶ 비급여 의료비(행위료, 약제비, 치료재료대 포함)에 대해
                        연간 350만원(50회) 한도로 공제금액을 뺀 금액을
                        보상공제금액: 보장대상의료비의 30%(최소 3만원).
                    </li>
                    <li>
                        ▶ 단, 연간 가입금액 한도 내에서 최초 10회 보장 후,
                        증상의 개선 등이 확인된 경우에 한하여 10회 단위로
                        50회까지 보상  비급여 주사료 의료비
                    </li>
                    <li>
                        ▶ 비급여 의료비에 대해 연간 250만원(50회) 한도로
                        공제금액을 뺀 금액을 보상공제금액: 보장대상의료비의
                        30%(최소3만원)  비급여 자기공명진단(MRI/MRA)) 의료비
                    </li>
                    <li>
                        ▶ 비급여 의료비(조영제, 판독료 포함)에 대해 연간
                        300만원 한도로 공제금액을 뺀 금액을 보상공제금액:
                        보장대상의료비의 30%(최소3만원)
                    </li>
                </ul>
                <br />
                <p>2. 알아두실 사항</p>
                <p>보험 가입 전 필수 확인사항 </p>
                <ul>
                    <li>
                        - 본 내용은 약관 내용을 요약 발췌한 것으로 세부 내용은
                        반드시 보험 약관을 참조하시기 바랍니다.
                    </li>
                    <li>
                        - 보험계약 청약시에는 보험상품명, 보험기간, 보험료, 보험료
                        납입기간, 피보험자 등을 반드시 확인하시고, 보험약관을
                        반드시 수령·설명 받으시기 바랍니다.
                    </li>
                    <li>
                        - 실손의료보험에 이미 가입하였다면 글로벌케어보험의
                        국내치료 보장에 가입할 실익이 낮습니다.
                    </li>
                    <li>
                        - 동 상품은 순수보장성 상품으로 만기환급금은 발생하지
                        않습니다.
                    </li>
                    <li>
                        - 만15세 미만자, 심신상실자, 심신박약자는 사망담보에
                        가입할 수 없습니다. 단, 심신박약자가 보험계약을
                        체결하거나 단체보험의 피보험자가 될 때 의사능력이 있는
                        경우 가능합니다.
                    </li>
                    <li>
                        - 피보험자 연령 만 15세 미만의 경우 사망담보 가입을 할 수
                        없습니다.
                    </li>
                    <li>
                        - 상해담보는 해일, 지진, 화산폭발 등 천재지변으로 인한
                        상해를 포함합니다.
                    </li>
                    <li>
                        - 해외의료기관은 해외소재 의료기관을 말하며,
                        해외소재약국을 포함합니다.
                    </li>
                    <li>
                        - 보험료는 여행기간/나이/성별에 따라 달라질 수 있습니다.
                    </li>
                    <li>
                        - 전쟁위험지역에 체류하는 경우 가입이 제한될 수 있습니다.
                    </li>
                    <li>
                        - 실손의료비 특별약관 및 해외체류중 중대사고 구조송환비용
                        등의 특별약관은 보험금을 지급할 다수의
                        보험계약(공제계약포함)이 체결되어 있는 경우 약관에 따라
                        비례하여 보상합니다.
                    </li>
                    <li>
                        - 보험료가 납입되지 않을 경우 손해발생시 보상을 받을 수
                        없습니다.
                    </li>
                    <li>
                        - 보험기간 중에 발생한 사고 및 질병에 한하여 보상합니다.
                    </li>
                    <li>
                        - 보험기간 중에 발생한 사고 및 질병에 한하여 보상하며,
                        보상받을 수 있는 경우와 보상받을 수 없는 경우를
                        확인하셔야 합니다.
                    </li>
                    <li>
                        - 지급한도, 면책사항 등에 따라 보험금 지급이 제한될 수
                        있습니다.
                    </li>
                    <li>
                        - 본 보험상품은 단체보험으로 연말정산시 소득공제 대상이
                        아닙니다. 실손의료비 관련 안내 실손의료비보장에 가입하는
                        경우, 실손의료비에 대하여 보험금을 지급할 다수의 계약이
                        체결되어 있는 경우에는 각각의 계약에 대하여 다른 계약이
                        없는 것으로 하여 산출한 보상책임액의 합계액이
                        실손의료비를 초과하였을 때, 보험회사는 이 계약에 따른
                        보상책임액의 합계약에 대한 비율에 따라 보험금을
                        지급합니다. 따라서, 계약 체결시 반드시 피보험자 본인의
                        실손의료비에 대한 보험 계약정보를 확인하시기 바랍니다.
                    </li>
                </ul>
                <br />
                <p>[실손의료비 보험계약여부 확인방법]</p>
                <ul>
                    <li>
                        공인인증서 보유시 한국신용정보원
                        크레딧포유(www.credit4u.or.kr)에서 실손의료비 계약정보
                        확인가능 (회사명, 상품명, 보험기간, 보장명, 가입금액,
                        계약상태의 6가지 항목 조회가능){' '}
                    </li>
                    <li>
                        보험계약을 체결하고자 하는 모집인에게 실손의료비
                        계약정보 확인요청 가능 (보험기간, 보장명, 가입금액,
                        계약상태의 4가지 항목 조회가능) 계약 전 알릴 의무 계약자
                        또는 피보험자는 청약할 때 청약서(전자문서 포함)에서
                        질문한 사항에 대하여 알고 있는 사실을 반드시 사실대로
                        알려야 하며(청약서 또는 전자청약서에 기재), 만약
                        사실대로 알리지 아니하였을 경우 보험금의 지급이
                        거절되거나 계약이 해지될 수 있습니다. 계약 후 알릴 의무
                    </li>
                    <li>- 보험계약자 또는 피보험자는 계약을 맺은 후 피보험자의 직업 또는 직무가 변경된 경우, 피보험자의 운전목적 (자가용에서 영업용으로 변경, 영업용에서 자가용으로의 변경 등)된 경우, 피보험자의 운전여부가 변경(비운전자에서 운전자로 변경, 운전자에서 비운전자로 변경) 이 변경된 경우, 이륜자동차 또는 원동기장치 자전거(전동킥보드, 전동휠 등 전동기로 작동하는 개인형 이동장치를 포함. 전동휠체어, 의료용 스쿠터 등 보행보조용 의자차는 제외)를 계속적으로 사용(직업, 직무 또는 동호회 활동과 출퇴근용도 등으로 주로 사용하는 경우에 한함)하게 된 경우에는 우편, 전화, 방문 등의 방법으로 지체없이 회사에 알려야 하며, 그렇지 않은 경우 보험사고가 발생한 경우에도 보험금지급이 제한될 수 있습니다. -회사는 계약 후 알릴 의무를 이행하지 않았을 때 손해발생여부에 관계없이 그 사실을 안 날부터 1개월 이내에 본 계약을 해지할 수 있습니다. -다만, 변경된 직업 또는 직무와 관계없이 발생한 보험금 지급사유에 관해서는 그러하지 아니합니다. -직업 또는 직무 변경, 피보험자의 운전목적 변경, 피보험자의 운전여부 변경에 따라 위험이 감소된 경우 보험료가 감액될 수 있으며, 이후 기간 보장을 위한 재원인 책임준비금 등의 차이로 인하여 발생한 정산금액이 환급될 수 있습니다. 한편 위험이 증가된 경우에는 납입보험료의 증액 및 정산금액 추가납입이 발생할 수 있습니다. 청약의 철회 일반금융소비자인 보험계약자는 『금융소비자 보호에 관한 법률』제46조, 동법시행령 제37조, 동법감독규정 제30조에서 정하는 바에 따라 보험증권을 받은 날부터 15일 이내(청약을 한 날부터 30일 이내에 한하며, 만 65세 이상 계약자가 전화를 이용하여 체결한 계약은 45일)에 청약을 철회할 수 있으며, 이 경우 철회를 접수한 날부터 3영업일 이내에 보험료를 돌려드립니다. 다만, 회사가 건강상태 진단을 지원하는 계약, 보장기간이 90일 이내인 계약 또는 전문금융소비자가 체결한 계약은 청약을 철회할 수 없습니다. 위법계약을 해지할 수 있는 권리 보험계약자는 보험회사가 「금융소비자 보호에 관한 법률」 제47조내지 제21조를 위반하여 계약을 체결한 경우, 동법 감독규정 제31조에서 정하는 바에 따라, 계약체결일부터 5년을 초과하지 않는 범위 내에서 계약체결에 대한 회사의 위반사항을 안 날부터 1년 이내에 서면 등으로 해당 계약의 해지를 요구할 수 있습니다. 이때 계약자는 해지요구서에 위반사실을 증명하는 서류를 첨부하여 보험사에 제출하여야 합니다. 이 경우 보험사에 해지를 요구하신 날부터 10일 이내에 수락여부를 통지(거절할 때에는 거절사유를 함께 포함하여 통지)받으실 수 있습니다. 다만, 법률에 따라 가입의무가 부과되고 그 해제∙해지도 해당 법률에 따라 가능한 보장성 상품에 대해 계약의 해지를 요구하려는 경우에는 동종의 다른 보험에 가입되어 있어야 합니다. 보험금을 지급하는 사유 - 피보험자가 보험기간 중 해외체류 도중(해외체류를 목적으로 주거지를 출발하여 체류를 마치고 주거지에 도착할 때까지를 포함)에 상해의 직접결과로써 사망한 경우(질병으로 인한 사망은 제외) 사망보험금을 지급하고 장해지급률에 해당하는 장해상태가 되었을 때 후유장해보험금(장해분류표에서 정한 지급률을 보험가입금액에 곱하여 산출한 금액)을 지급하여 드립니다. - 실손의료비 특별약관 및 해외체류중 중대사고 구조송환비용 특별약관 등에 대하여 다수계약이 체결되어 있는 경우에는 회사는 해당약관에 따라 비례 보상합니다.  보험금을 지급하지 아니하는 사유 - 피보험자가 고의로 자신을 해친 경우, 보험수익자가 고의로 피보험자를 해친 경우, 계약자가 고의로 피보험자를 해친 경우 - 피보험자의 임신, 출산(제왕절개 포함), 산후기 - 전쟁, 외국의 무력행사, 혁명, 내란, 사변, 폭동 - 직업, 직무 또는 동호회 활동 목적으로 아래에 열거된 행위 1) 전문등반, 글라이더 조종, 스카이다이빙, 스쿠버다이빙, 행글라이딩, 수상보트, 패러글라이딩 2) 모터보트, 자동차 또는 오토바이에 의한 경기, 시범, 흥행 또는 시운전 등 3) 선박에 탑승하는 것을 직무로 하는 사람이 직무상 선박에 탑승하고 있는 동안 ※ 기타 세부 담보별 보험금을 지급하지 않는 사유는 반드시 약관을 참조하시기 바랍니다.  계약의 해지 및 보험료의 환급 - 보험계약자 또는 피보험자의 책임있는 사유로 보험계약을 해지하는 경우에는 이미 경과한 기간에 대하여 단기요율로 계산한 보험료를 뺀 금액을 지급하여 드립니다. 다만, 보험기간 중 보험사고가 발생하고 보험금이 지급되어 보험가입금액이 감액된 경우에는 어떠한 경우에도 당해 보험년도의 보험료는 돌려드리지 않습니다. - 계약자가 납입한 보험료 중 일부는 불의의 사고를 당한 다른 가입자에게 지급되는 보험금으로, 일부는 보험회사 운영에 필요한 경비로 사용되므로 중도해지시 해지환급금은 이미 납입한 보험료보다 적거나 없을 수 있습니다. - 이 상품은 만기환급금이 없는 상품입니다.  계약의 무효 - 다음 중 한 가지에 해당되는 경우에는 계약을 무효로 하며 이미 납입한 보험료를 돌려드립니다. - 만 15세 미만자, 심신상실자 또는 심신박약자의 사망을 보험금 지급사유로 한 경우 - 타인의 사망을 보험금 지급사유로 하는 계약에서 계약을 체결할 때까지 피보험자의 서면에 의한 동의를 얻지 않은 경우(다만 단체규약에 따라 구성원의 전부 또는 일부를 피보험자로 하는 계약을 체결하는 경우에는 이를 적용하지 아니함. 이때, 단체보험의 보험수익자를 피보험자 또는 그 상속인이 아닌 자로 지정할 때에는 단체의 규약에서 명시적으로 정한 경우가 아니면 이를 적용함) - 계약을 체결할 때 계약에서 정한 피보험자의 나이에 미달되었거나 초과되었을 경우  계약의 취소 보험계약자는 보험회사가 보험계약 청약시 약관 및 계약자 보관용 청약서(청약서 부본)를 청약할 때 계약자에게 전달하지 않거나 약관의 중요한 내용을 설명하지 않은 때 또는 계약을 체결할 때 계약자가 청약서에 자필서명(날인(도장을 찍음) 및 「전자서명법」 제2조 제2호에 따른 전자서명을 포함합니다)을 하지 않은 때에는 계약자는 계약이 성립한 날부터 3개월 이내에 계약을 취소할 수 있습니다. 계약이 취소된 경우에는 회사는 이미 납입한 보험료를 돌려드리며, 보험료를 받은 기간에 대하여 ‘보험개발원이 공시하는 보험계약대출이율’을 연단위 복리로 계산한 금액을 더하여 지급합니다. 예금자보호 안내 이 보험계약은 예금자보호법에 따라 예금보험공사가 보호하되, 보호 한도는 본 보험회사에 있는 귀하의 모든 예금보호대상 금융상품의 해약환급금(또는 만기 시 보험금이나 사고보험금)에 기타지급금을 합하여 1인당 “최고 5천만원”이며, 5천만원을 초과하는 나머지 금액은 보호하지 않습니다. 다만, 보험계약자 및 보험료 납부자가 법인인 보험계약은 예금자보호법에 따라 예금보험공사가 보호하지 않습니다. 전환 계약(계약해지 후 다른 보험 계약)시 유의사항 보험계약자가 기존 보험계약을 해지하고 새로운 보험계약을 체결하는 경우, 보험인수가 거절되거나 보험료가 인상될 수 있으며, 보장내용 (면책기간 재 적용 등)이 달라질 수 있습니다. 비급여 진료비 비교 관련 안내 - 비급여 진료비 가격은 의료기관별로 상이하므로 가격비교를 통해 실손의료보험에서 고객님이 부담하시는 비용을 절감하실 수 있습니다. 의료기관별 비급여 진료비 가격은 건강보험심사평가원 홈페이지에서 확인 가능합니다. - 인터넷 : www.hira.or.kr > 정보 > 비급여 진료비 정보  금융감독원 보험범죄 신고센터 - 보험범죄는 형법 제347조(사기)에 의거 10년 이하의 징역이나 2천만원 이하의 벌금에 처해지며, 보험범죄를 교사한 경우에도 동일한 처벌을 받을 수 있습니다. (전화 : 1332) - 인터넷 : 금융감독원 홈페이지 > www.fss.or.kr > 인터넷보험범죄신고  모집질서확립 및 신고센터 안내 - 보험계약과 관련한 보험모집질서 문란행위는 보험업법에 의해 처벌받을 수 있습니다. - 보험계약과 관련한 특별이익제공 행위 및 보험모집질서 문란행위는 보험업법에 의해 처벌받을 수 있습니다. - 손해보험협회 모집질서문란 신고센터 (02-3702-8585)  금융소비자보호법에 관한 사항 - 현대해상화재보험은 해당 상품에 대해 충분히 설명할 의무가 있으며, 가입자는 가입에 앞서 이에 대한 충분한 설명을 받으시기 바랍니다. - 토글보험서비스(주)는 다수의 보험사와 계약 체결 및 대리ㆍ중개하는 보험대리점입니다. - 토글보험서비스(주)는 보험사로부터 보험계약체결권을 부여받지 아니한 금융상품판매 대리ㆍ중개업자임을 알려드립니다. - 토글보험서비스(주) (등록번호 제 :2020070006호)</li>
                </ul>
            </AccordionDetails>
        </Accordion>
    );
}

export default WarningAccordion;
