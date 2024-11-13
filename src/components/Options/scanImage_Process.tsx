import Webcam from 'react-webcam';
import { useState, useRef, useCallback, useEffect } from 'react';
import { base64ToBlob } from '../../utils/axios/axios';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { postImageData } from '../../utils/redux/infoSlice';

export default function ScanImage_Process() {
    const info = useAppSelector((state) => state.info);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const webcamRef = useRef<Webcam | null>(null);

    // const [imageURL, setImageURL] = useState<string | null>(null);
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

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleScanImage();
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (
            info.address != '' &&
            info.businessNumber != '' &&
            info.businessName != ''
        ) {
            navigate('/business-infor');
        }
    }, [info]);

    useEffect(() => {
        if (image) {
            console.log(image);
            const imageChange64 = base64ToBlob(image, 'image/jpeg');

            const file = blobToFile(imageChange64, 'captured_image.jpg');
            dispatch(postImageData(file));
        }
    }, [image]);

    const handleScanImage = async () => {
        try {
            await capture();
        } catch (error) {
            console.log('error', error);
        }

        //Scan Process Function
        // if (image) {
        //     console.log('Captured Image:', image);

        //     try {
        //         const imageChange64 = base64ToBlob(image, 'image/jpeg');
        //         const file = blobToFile(imageChange64, 'captured_image.jpg');
        //         const fileURL = URL.createObjectURL(file);
        //         setImageURL(fileURL);
        //         console.log('imageURL: ', imageURL);
        //         console.log('Captured Image File: ', file);
        //     } catch (error) {
        //         console.log('error: ', error);
        //     }
        // } else {
        //     console.error('No image captured.');
        // }
    };

    const videoConstraints = {
        facingMode: 'environment',
    };

    return (
        <div className="wrap-camera">
            <section
                style={{
                    overflow: 'hidden',
                }}
            >
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
                        <h2
                            className="sect-title"
                            style={{
                                padding: 0,
                            }}
                        >
                            카메라로 사업자등록증을 자동 활영합니다. <br />
                            사각형에 맞게 놓아주세요.
                        </h2>
                    </div>
                    <div className="overlay"></div>
                    <div className="bright-area"></div>
                </div>
            </section>

            {/* <div
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
