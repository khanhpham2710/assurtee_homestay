import FeeLandingPage from '../../components/HomePageComponents/FeeLandingPage';
export default function Landing_Fee() {
    return (
        <div className="main-section sample">
            <div className="main-section-inner">
                <h2 className="main-section-title">
                    전용보험
                    <br />
                    보험료 산출 예시
                </h2>
                <p className="main-section-description">
                    최적의 보험료를 분석 추천합니다.
                </p>
            </div>
            <FeeLandingPage />
        </div>
    );
}
