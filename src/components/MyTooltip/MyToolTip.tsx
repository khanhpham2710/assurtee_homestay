import React from 'react';

function MyToolTip() {
    return (
        <div className="box-cont">
            <div className="tooltip">
                <button
                    type="button"
                    className="tooltip-btn bg-gray"
                    aria-label="도움말"
                ></button>
                <div className="tooltip-content">툴틻내용</div>
            </div>
        </div>
    );
}
export default MyToolTip;
