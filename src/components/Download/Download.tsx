import images from '../../assets/images';

type DownloadProps = {
    text: string;
    href: string;
    fileName?: string;
};

function Download({ text, href, fileName }: DownloadProps) {
    return (
        <a
            href={href}
            download={fileName || null}
            className="dflex_center"
            style={{
                width: '150px',
                height: '50px',
                backgroundColor: '#e7ecf3',
                borderRadius: '50px',
                gap: '8px',
                cursor: 'pointer',
                textDecoration: 'none',
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
        </a>
    );
}

export default Download;
