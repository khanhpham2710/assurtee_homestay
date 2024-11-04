import React, { useEffect, useRef } from 'react';
import Images from '../../assets/images';

interface Props {
    title: string;
    video_id: string;
}

export default function Video_component({ title, video_id }: Props) {
    const videoRef = useRef<HTMLImageElement>(null);
    const titleRef = useRef<HTMLParagraphElement>(null);
    const resizeObserver = useRef<ResizeObserver | null>(null);

    const handlePlayClick = () => {
        window.open(`https://www.youtube.com/watch?v=${video_id}`, '_blank');
    };

    const updateTitleWidth = () => {
        if (videoRef.current && titleRef.current) {
            titleRef.current.style.width = `${videoRef.current.width}px`;
        }
    };

    useEffect(() => {
        if (videoRef.current) {
          
            resizeObserver.current = new ResizeObserver(updateTitleWidth);
            resizeObserver.current.observe(videoRef.current);

           
            if (videoRef.current.complete) {
                updateTitleWidth();
            }
        }
        return () => {
            resizeObserver.current?.disconnect();
        };
    }, []);

    return (
        <div className="video_component">
            <p
                ref={titleRef}
                style={{
                    marginBottom: '13px',
                }}
            >
                {title}
            </p>

            {/* Video Thumbnail */}
            <div className="thumbnail_container" onClick={handlePlayClick}>
                <img
                    src={`https://img.youtube.com/vi/${video_id}/hqdefault.jpg`}
                    alt="Thumbnail"
                    ref={videoRef}
                    onLoad={updateTitleWidth}
                />
                <img src={Images.videoButton} alt="Play Button" />
            </div>
        </div>
    );
}
