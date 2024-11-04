import React from 'react';
import images from '../../assets/images';
import { Avatar } from '@mui/material';
import Download from '../../components/Download/Download';

function InsuranceDetailsPage() {
    const success: boolean = true;

    return (
        <div>
            <section>
                <p
                    className="title_drawer"
                    style={{
                        fontSize: 22,
                        marginLeft: 24,
                    }}
                >
                    {success ? '보호 중입니다!' : '가입 취소되었습니다.'}
                </p>
                <div
                    style={{
                        width: '100%',
                        marginTop: '42.3px',
                    }}
                    className="dflex_center"
                >
                    <img
                        src={
                            success
                                ? images.SuccessRegistration
                                : images.FailedRegistration
                        }
                    />
                </div>
            </section>
            <section>
                <Avatar
                    src={images.InsuranceLogo}
                    alt=""
                    sx={{
                        margin: '16px 206px 0px 24px',
                        objectFit: 'contain',
                    }}
                />
                <p
                    className="titleMedium"
                    style={{ margin: '12px 24px 0', textAlign: 'left' }}
                >
                    현대해상화재보험 해외장기체류단체보험
                </p>
            </section>
            {success && (
                <section
                    className="dflex_center"
                    style={{
                        gap: 12,
                        marginTop: 53,
                    }}
                >
                    <Download text="가입확인서" href="" fileName="" />
                    <Download text="가입확인서(영문)" href="" fileName="" />
                </section>
            )}
            <section style={{ marginTop: success ? 32 : 24 }}>
                Accordion
            </section>
        </div>
    );
}

export default InsuranceDetailsPage;
