import images from '../../assets/images';

function Download({ text }: { text: string }) {
    return (
        <div
            className="dflex_center"
            style={{
                width: '150px',
                height: '50px',
                backgroundColor: '#e7ecf3',
                borderRadius: '50px',
                gap: '8px',
                cursor: 'pointer',
            }}
        >
            <p
                style={{
                    fontFamily: 'AppleSDGothicNeoB',
                    fontSize: '14px',
                    fontStretch: 'normal',
                    fontStyle: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: 'normal',
                    textAlign: 'center',
                    color: '#333647',
                }}
            >
                {text}
            </p>
            <img src={images.ArrowIconDown} />
        </div>
    );
}

export default Download;
