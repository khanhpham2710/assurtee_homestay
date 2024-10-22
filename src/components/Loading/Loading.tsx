import images from '../../assets/images';

function LoadingPage() {
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
