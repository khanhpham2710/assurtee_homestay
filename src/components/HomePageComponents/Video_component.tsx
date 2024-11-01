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
            <div className="thumbnail_container" onClick={handlePlayClick}>
                <img
                    src={`https://img.youtube.com/vi/${video_id}/hqdefault.jpg`}
                    alt="Thumbnail"
                />

                <img src={Images.videoButton} alt="Play Button" />
            </div>
        </div>
    );
}
