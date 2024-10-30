import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Divider, Input } from '@mui/material';
function SearchAddress() {
    return (
        <section className="search_page">
            <section className="search_header header1">
                <p>주소검색</p>

                <div>
                    <CloseIcon sx={{}} />
                </div>
            </section>

            <section className="search_input fullWidth_item">
                <Input></Input>

                <i className="fa-solid fa-magnifying-glass"></i>
            </section>

            <Divider variant="fullWidth" />

            <section className="tip_search">
                <p>tip</p>
                <p>
                    아래와 같은 조합으로 검색을 하시면 더욱 정확한 결과가
                    검색됩니다.
                </p>
                <div className="tip_1">
                    <p className="tip_2"> 도로명 + 건물번호</p>
                    <p className="tip_3"> 판교역로 235, 제주 첨단로 242</p>
                </div>
                <div className="tip_1">
                    <p className="tip_2">지역명(동/리) + 번지</p>
                    <p className="tip_3"> 삼평동 681, 제주 영평동 2181</p>
                </div>
                <div className="tip_1">
                    <p className="tip_2">지역명(동/리) + 번지</p>
                    <p className="tip_3"> 분당 주공, 연수동 주공3차</p>
                </div>
                <div className="tip_1">
                    <p className="tip_2">사서함명 + 번호</p>
                    <p className="tip_3"> 분당우체국사서함 1~100</p>
                </div>
            </section>

            <section>Powered by kakao | 우편번호 서비스 안내</section>
        </section>
    );
}

export default SearchAddress;
