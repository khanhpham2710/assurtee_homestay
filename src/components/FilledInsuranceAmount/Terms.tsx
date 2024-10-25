import React from 'react';
import images from '../../assets/images';

type TermsProp = {
    checkAll: boolean;
    setCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
};

function Terms({ checkAll, setCheckAll }: TermsProp) {
    const handleCheckAll = (): void => {
        setCheckAll((prev) => !prev);
    };

    return (
        <div>
            <section className="dflex_item" style={{ gap: '10px' }}>
                <img
                    src={checkAll ? images.CheckBox : images.UnCheckBox}
                    style={{ cursor: 'pointer' }}
                    onClick={handleCheckAll}
                />
                <p
                    style={{
                        fontFamily: 'AppleSDGothicNeoM',
                        fontSize: '16px',
                        lineHeight: '1.25',
                        letterSpacing: 'normal',
                        textAlign: 'left',
                        color: '#000',
                    }}
                >
                    전체 동의
                </p>
            </section>
            <section></section>
        </div>
    );
}

export default Terms;
