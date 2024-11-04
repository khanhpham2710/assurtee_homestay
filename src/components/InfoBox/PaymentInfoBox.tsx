import { Divider } from '@mui/material';
import images from '../../assets/images';

export type InfoProps = {
    title: string;
    info: string;
};

function PaymentInfoBox({ title, info }: InfoProps) {
    return (
        <>
            <div
                className="dflex_spacebetween"
                style={{
                    minHeight: '50px',
                    padding: '11px 0',
                }}
            >
                <label className="grey_label">
                    <span
                        className="bullet-L"
                        style={{
                            backgroundImage: `url(${images.greyL})`,
                        }}
                    />
                    {title}
                </label>
                <p className="medium_info">{info}</p>
            </div>
            <Divider
                sx={{
                    mb: '8px',
                    backgroundColor: '#e0e0e0',
                }}
            />
        </>
    );
}

export default PaymentInfoBox;
