export type InfoProps = {
    title: string;
    info: string;
};

function PaymentInfoBox({ title, info }: InfoProps) {
    return (
        <div className="form-cont flex-wrap type-path">
            <p className="item-title">{title}</p>
            <p className="item-text">{info}</p>
        </div>
    );
}

export default PaymentInfoBox;
