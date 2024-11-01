import React from 'react';
import FeeLandingPage from '../../components/HomePageComponents/FeeLandingPage';
export default function Landing_Fee() {
    return (
        <section
            className="dflex_center fullWidth_item flexColumn_item "
            style={{
                padding: '0 24px',
            }}
        >
            <div
                className="title_card"
                style={{ marginTop: '90px', marginBottom: '40px' }}
            >
                <p className="title_main_component">
                    전용보험 <br /> 보험료 산출 예시
                </p>
                <p>최적의 보험료를 분석 추천합니다.</p>
            </div>
            <FeeLandingPage />
        </section>
    );
}
