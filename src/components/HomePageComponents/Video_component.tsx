import Images from '../../assets/images';

interface Props {
    title: string;
    video_id: string;
}

export default function Video_component({ title, video_id }: Props) {
    const handlePlayClick = () => {
        window.open(`https://www.youtube.com/watch?v=${video_id}`, '_blank');
    };

    return (
        <div className="video_component">
            <p style={{ marginBottom: '13px' }}>{title}</p>

            {/* Video Thumbnail */}
            <div
                className="thumbnail_container"
                style={{ position: 'relative' }}
                onClick={handlePlayClick}
            >
                <img
                    src={`https://img.youtube.com/vi/${video_id}/hqdefault.jpg`}
                    style={{
                        objectFit: 'cover',
                        width: '312px',
                        height: '174px',
                        borderRadius: '7px',
                    }}
                    alt="Thumbnail"
                />
                <button
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    <img
                        src={Images.videoButton}
                        alt="Play Button"
                        style={{
                            objectFit: 'cover',
                            width: '44px',
                            height: '44px',
                            background: 'transparent',
                        }}
                    />
                </button>
            </div>
        </div>
    );
}
