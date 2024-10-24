import React, { useState } from 'react';
import Images from '../../assets/images';

interface Props {
    title: string;
    video_id: string;
}

export default function Video_component({ title, video_id }: Props) {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="video_component">
            <p style={{ marginBottom: '13px' }}>{title}</p>

            {/* Conditionally render either the video thumbnail or the iframe */}
            {!clicked ? (
                <div className="thumbnail_container">
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
                        onClick={() => setClicked(true)}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-70%, -40%)',
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
            ) : (
                <iframe
                    className="video_frame"
                    width="315px"
                    height="180px"
                    src={`https://www.youtube.com/embed/${video_id}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '7px' }}
                    onClick={() => setClicked(false)}
                ></iframe>
            )}
        </div>
    );
}
