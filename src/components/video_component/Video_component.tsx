import React, { useState, useRef } from 'react';
import Images from '../../assets/images';

interface Props {
    title: string;
    video_id: string;
}

export default function Video_component({ title, video_id }: Props) {
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handlePlayClick = () => {
        setIsFullscreen(true);
    };

    const handleCloseClick = () => {
        setIsFullscreen(false);
    };

    return (
        <div className="video_component">
            <p style={{ marginBottom: '13px' }}>{title}</p>

            {/* Video Thumbnail */}
            <div
                className="thumbnail_container"
                style={{ position: 'relative' }}
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
                    onClick={handlePlayClick}
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

            {/* Fullscreen Video Modal */}
            {isFullscreen && (
                <div
                    className="fullscreen_modal"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                    }}
                >
                    <iframe
                        className="video_frame"
                        src={`https://www.youtube.com/embed/${video_id}?autoplay=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    ></iframe>
                    <button
                        onClick={handleCloseClick}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            fontSize: '50px',
                            cursor: 'pointer',
                        }}
                        aria-label="Close Video"
                    >
                        &times;
                    </button>
                </div>
            )}
        </div>
    );
}
