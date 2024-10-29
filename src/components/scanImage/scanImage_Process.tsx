import React from 'react';
import Webcam from 'react-webcam';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useCallback, useEffect } from 'react';
import { base64ToBlob, postImage } from '../../utils/axios/axios';
import { Height } from '@mui/icons-material';

interface OutputType {
    계약자: string | null;
    등록번호: string | null;
    상호법인명: string | null;
    주소: string | null;
    place: string | null;
}

export default function ScanImage_Process() {
    const [output, setOutput] = useState<OutputType>({
        계약자: null,
        등록번호: null,
        상호법인명: null,
        주소: null,
        place: null,
    });

    const webcamRef = useRef<Webcam | null>(null);

    const [imageURL, setImageURL] = useState<string | null>(null);
    const [image, setImage] = useState<string | null>();

    const capture = useCallback(async () => {
        try {
            const imageSrc: string | null =
                webcamRef.current?.getScreenshot({
                    width: 1080,
                    height: 1920,
                }) || null;
            if (imageSrc) {
                setImage(imageSrc);
            }
        } catch (error) {
            console.log('error capturing image: ', error);
        }
    }, [webcamRef]);

    const blobToFile = (blob: Blob, fileName: string): File => {
        return new File([blob], fileName, { type: blob.type || '' });
    };

    const handleScanImage = async () => {
        try {
            await capture();
        } catch (error) {
            console.log('error', error);
        }

        //Scan Process Function
        if (image) {
            console.log('Captured Image:', image);

            try {
                const imageChange64 = base64ToBlob(image, 'image/jpeg');

                const file = blobToFile(imageChange64, 'captured_image.jpg');

                const fileURL = URL.createObjectURL(file);

                setImageURL(fileURL);
                console.log('imageURL: ', imageURL);
                console.log('Captured Image File: ', file);

                let response = null;

                if (file) {
                    response = await postImage(file);
                }

                console.log('response: ', response);

                return response;
            } catch (error) {
                console.log('error: ', error);
            }
        } else {
            console.error('No image captured.');
        }
    };

    const videoConstraints = {
        facingMode: 'environment',
    };

    return (
        <div>

            <section className="fullWidth_item fullHeightView_item ">
                <div className="webcam-component">
                    <Webcam
                        ref={webcamRef}
                        imageSmoothing={true}
                        forceScreenshotSourceSize={true}
                        className="webcame_item"
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                    <div className="scan_title">
                        <p>
                            카메라로 사업자등록증을 자동 활영합니다. 사각형에
                            맞게 놓아주세요.
                        </p>
                    </div>
                    <div className="overlay"></div>
                    <div className="bright-area"></div>
                </div>
            </section>


            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '50px',
                }}
            >
                <button
                    className="confirm-button active"
                    style={{ padding: '16px 80px 14px', marginTop: '0px' }}
                    onClick={handleScanImage}
                >
                    사업자등록번호
                </button>
            </div>

            <section className="text-output" style={{ textAlign: 'center' }}>
                {imageURL && (
                    <div>
                        <h2>Captured Image Preview:</h2>
                        <img
                            src={imageURL}
                            alt="Captured"
                            width="1080px"
                            height="1920px"
                        />
                    </div>
                )}
            </section> */}


        </div>
    );
}
