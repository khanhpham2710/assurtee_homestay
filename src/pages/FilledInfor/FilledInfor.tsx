import React, { useState } from 'react';

import Question from '../../components/Questions/Question';

export default function FilledInfor() {

    const items = ['예', '아니오'];
    const [item,setItem] = useState<string>(items[0]);

    console.log(item)

    return (
        <div className="dflex_center fullWidth_item " style={{ padding: '0 24px'}}>
            <Question
                title="사업자등록 주소지와 보험 가입 대상 민박업 운영 주소지가 동일하나요?"
                item={item}
                items={items}
                setItem = {setItem}
            />
        </div>
    );
}
