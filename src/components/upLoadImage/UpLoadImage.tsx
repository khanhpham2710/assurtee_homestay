import React, { useEffect, useState } from 'react';
import images from '../../assets/images';

export default function () {
    const [image, setImage] = useState(null);

    return (
        <div>
            <div>
                {image === null ? (
                    <div>
                        <p>설치 되어 있는 스프링쿨러 사진을 추가해 주세요.</p>
                        <img src={images.ImageIcon} alt="" />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>

            <div>
                <button></button>
                <button></button>
            </div>
        </div>
    );
}
