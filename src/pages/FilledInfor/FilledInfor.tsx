import { useState } from 'react';
import Inputs from '../../components/Inputs/Inputs';
export default function FilledInfor() {
    
    const [constractor, setContractor] = useState<string>('');
    const [dob, setDob] = useState<string>('');
    const [registrationNumber, setRegistrationNumber] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');

    return (
        <div style={{ padding: '0 24px' }}>
            <section className="dflex-column" style={{ marginBottom: '28px' }}>
                <p className="titleNumber">
                    <span>1</span> / 2
                </p>

                <p
                    className="titleMedium"
                    style={{
                        textAlign: 'left',
                        marginTop: '17px',
                    }}
                >
                    보험 가입 정보를 입력해 주세요.
                </p>
            </section>
            <section>
                <Inputs
                    contractor={constractor}
                    setContractor={setContractor}
                    dob={dob}
                    setDob={setDob}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    registrationNumber={registrationNumber}
                    setRegistrationNumber={setRegistrationNumber}
                />
            </section>
        </div>
    );
}
