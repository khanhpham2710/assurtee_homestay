import React from 'react';

type WarningAccordionType = {
    title: React.ReactNode;
    content: React.JSX.Element;
};

function WarningAccordion({ title, content }: WarningAccordionType) {
    return (
        <div className="info-box" data-role="accordion-wrap">
            <div className="inner" data-role="accordion-item">
                <div className="info-title">{title}</div>
                <div className="info-content" data-role="accordion-content">
                    {content}
                </div>
            </div>
        </div>
    );
}

export default WarningAccordion;
