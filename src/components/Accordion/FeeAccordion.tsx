function FeeAccordion() {
    return (
        <div className="details-content">
            <div className="total-sumbox">
                <div
                    className="accordion"
                    data-role="accordion-wrap"
                    data-accordion-type="multiple"
                >
                    <div className="accordion-item" data-role="accordion-item">
                        <a
                            href="#"
                            className="accordion-title"
                            data-role="accordion-title"
                        >
                            총 보험료
                            <strong className="aside">
                                <span className="tot-text">19,300원</span>
                            </strong>
                        </a>
                        <div
                            className="accordion-content"
                            data-role="accordion-content"
                        >
                            <ul className="block-list">
                                <li className="flex-wrap type-path">
                                    <span className="tit ">화재보장 부문</span>
                                    <span className="cont">9,300원</span>
                                </li>
                                <li className="flex-wrap type-path">
                                    <span className="tit">
                                        영업배상 보장 부문
                                    </span>
                                    <span className="cont">10,000원</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeeAccordion;
