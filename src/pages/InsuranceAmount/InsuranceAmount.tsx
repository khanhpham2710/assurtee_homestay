import React, { useState } from 'react';
import Question from '../../components/Questions/Question';

function InsuranceAmount() {
    const items: string[] = ['1억', '3억', '5억'];
    const [item, setItem] = useState<string>(items[0]);

    return (
        <div style={{ padding: '8px 24px 0' }}>
            <section className="dflex-column" style={{ marginBottom: '28px' }}>
                <p className="titleNumber">
                    <span>2</span> / 2
                </p>
            </section>
            <Question
                title="화재보험 가입금액을 선택해 주세요."
                item={item}
                items={items}
                setItem={setItem}
            />
        </div>
    );
}

export default InsuranceAmount;
