import { useEffect } from 'react';
import images from '../../assets/images';
import { useNavigate } from 'react-router-dom';

function LoadingPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (Math.floor(Math.random() * 2) === 0) {
                navigate('/payment', { state: { isPaid: false } });
            } else {
                navigate('/payment', { state: { isPaid: true } });
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            className="dflex_center flexColumn_item"
            style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#f6f7f9',
                zIndex: '1',
                position: 'absolute',
                top: 0,
            }}
        >
            <img
                src={images.Loading}
                style={{ width: '64px', height: '64px' }}
                alt="Loading"
            />
            <h3
                style={{
                    fontFamily: 'AppleSDGothicNeoH',
                    fontSize: '22px',
                    lineHeight: '1.27',
                    textAlign: 'center',
                    color: '#000',
                }}
            >
                결제가 진행 중입니다.
            </h3>
        </div>
    );
}

export default LoadingPage;
