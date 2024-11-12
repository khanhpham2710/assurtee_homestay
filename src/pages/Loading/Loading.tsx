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
        <>
            <div className="loading" style={{ display: 'flex' }}>
                <img src={images.Loading} alt="" className="loading-img" />
                <p className="loading-text">결제가 진행 중입니다.</p>
            </div>
        </>
    );
}

export default LoadingPage;
