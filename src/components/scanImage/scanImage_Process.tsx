import React from 'react';
import Webcam from 'react-webcam';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useCallback, useEffect } from 'react';
import { base64ToBlob, postImage } from '../../axios/axios';

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
                    width: 190,
                    height: 1080,
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
            <section className="scan-component">
                <div className="webcam-component">
                    <Webcam
                        ref={webcamRef}
                        imageSmoothing={true}
                        forceScreenshotSourceSize={true}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                        style={{ width: '100%', height: '100%' }}
                    />
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
                        <img src={imageURL} alt="Captured" width="300" />
                    </div>
                )}
            </section>
        </div>
    );
}
