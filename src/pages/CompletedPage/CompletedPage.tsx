import images from '../../assets/images';
import { useNavigate } from 'react-router-dom';
import LoadingPage from '../../components/Loading/Loading';

function CompletedPage() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    // return <LoadingPage />

    return (
        <div
            className="dflex_center flexColumn_item"
            style={{
                width: '100%',
                height: 'calc(100vh - 100px)',
            }}
        >
            <img src={images.Success} />
            <h3
                style={{
                    margin: '38px 0 12px',
                    fontFamily: 'AppleSDGothicNeoH',
                    fontSize: '22px',
                    lineHeight: '1.27',
                    color: '#000',
                    textAlign: 'center',
                }}
            >
                보험 가입이 완료 되었습니다.
            </h3>
            <h3
                style={{
                    fontFamily: 'AppleSDGothicNeoM',
                    fontSize: '16px',
                    lineHeight: '1.27',
                    color: '#000',
                    textAlign: 'center',
                }}
            >
                가입확인서는 입력하신 <br />
                핸드폰 번호 카카오톡으로 보내드렸습니다.
            </h3>
            <button className="button2" style={{ marginTop: '32px' }}>
                가입내역 확인
            </button>
            <h6
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    width: '100%',
                    fontSize: '16px',
                    lineHeight: '1.25',
                    color: '#000',
                    textAlign: 'center',
                    cursor: 'pointer',
                }}
                onClick={handleHomeClick}
            >
                홈으로
            </h6>
        </div>
    );
}

export default CompletedPage;
