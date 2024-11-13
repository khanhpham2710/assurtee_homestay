export type InfoProps = {
    title: string;
    info: string;
};

export default function GreyLabelInfoBox({ title, info }: InfoProps) {
    return (
        <div className="form-cont flex-wrap">
            <p className="item-title">{title}</p>
            <p className="item-text">{info}</p>
        </div>
    );
}
